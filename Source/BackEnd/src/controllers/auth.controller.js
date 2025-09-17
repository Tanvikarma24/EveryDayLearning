const userModel = require("../models/user.modle");
const foodPartnerModel = require('../models/foodpartner.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { json } = require("express");

async function registerUser(req, res) {
    const { user_id,fullName, email,password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({email})

    if(isUserAlreadyExists) {
        return res.status(400).json({
            Message:"user is alrealy exist"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword,
    })

    const token = jwt.sign({
        id: user_id,
    }, process.env.JWT_SECRET)

    res.cookie('token',token)

    res.status(201).json({
        Message: "User created successfully",
        user: {
            _id: user_id,
            email:user.email,
            fullName: user.fullName
        }
    })
}

async function loginUser(req,res) {
    const {email, password} = req.body;
    
    const user = await userModel.findOne({
        email
    })

    if(!user) {
        res.status(400).json({
            Message: "Invalid email or password"
        })
    }

    const isPasswordValid =  await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.status(400).json({
            Message: "Invalid email and password"
        })
    }
    
    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie('token',token)

    res.status(200).json({
        Message:"User logedIn successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })
}

function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        Message:"User Logout successfully"
    })
}

async function registerFoodPartner(req, res) {
    
    const { name, email, password, phone, address, contectName } = req.body;

    const isAccountAlreadyExists = await foodPartnerModel.findOne({ email });

    if (isAccountAlreadyExists) {
        return res.status(400).json({
            Message: "Food partner account already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodpartner = await foodPartnerModel.create({
        name,
        email,
        password: hashedPassword,
        phone,
        address,
        contectName
    });

    const token = jwt.sign(
        { id: foodpartner._id },
        process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.status(200).json({
        Message: "FoodPartner created successfully",
        foodpartner: {
            _id: foodpartner._id,
            email: foodpartner.email,
            name: foodpartner.name,
            address,
            contectName,
            phone
        }
    });
}


async function loginFoodPartner(req, res) {
    const{ email, password} = req.body;
    const foodPartner = await foodPartnerModel.findOne({
        email
    })

        if(!foodPartner) {
        return res.status(400).json({
            Message: "Invalid user or email"
        });
    }

    const isPasswordValid = await bcrypt.compare(password, foodPartner.password)

    if(!isPasswordValid) {
        return res.status(400).json({
            Message: "Invalid password"
        })
    }

    const token =   jwt.sign({
        id: foodPartner._id
    }, process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        Message: "food partner logged in successfully",
        foodPartner: {
            _id: foodPartner._id,
            email:foodPartner.email,
            name: foodPartner.name
        }
    })
}

function logoutFoodPartner(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        Message: "FoodPartner logged out successfully"
    });
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}
