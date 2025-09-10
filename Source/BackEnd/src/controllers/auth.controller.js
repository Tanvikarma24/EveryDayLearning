const userModel = require("../models/user.modle")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
    const { user_id,fullName, email,password} = req.body;
    console.log('req', req.body);
    

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
        password: hashedPassword
    })

    const token = jwt.sign({
        id: user_id,
    }, "c83e9dd2cd4050b3e5e04af24ccec989")

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

async function loginUser() {
    const {email, password} = req.body;
    const user = await userModel.findOne({
        email
    })

    if(!user) {
        res.status(400).json({
            Message: "Invalid email or password"
        })
    }

    const isPasswordValid =  await bcrypt.compare(password, user.password)
}

module.exports = {
    registerUser,
    loginUser
}
