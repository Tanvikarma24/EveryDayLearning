const { request } = require('../app');
const foodPartnerModel = require('../models/foodpartner.model');
const userModel = require('../models/user.modle')

const jwt = require('jsonwebtoken');

async function authFoodPartnerMiddleware(req, res, next)  {
    const token = req.cookies.token;
    
    if(!token) {
        return res.status(401).json({
            message: "Please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const foodPartner = await foodPartnerModel.findOne({ _id: decoded.id });

        req.foodPartner = foodPartner;

        next()
    }
    catch(err) {
        return res.status(401).json({
            message: "Invalid Token"
        })
    }
}

async function authUserMiddleware(req, res, next) {
    const token = req.cookies.token;
    if(!token) {
        return res. status(401).json({
            message: "Please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded,'======');
        
        const user = await userModel.findById(decoded.id);
        console.log('user',user);
        
        req.user = user;
        console.log('..', req.user);
        
        next()
        console.log('here');
        
    } catch(err) {
        return res.status(401).json({
            message: "Invalid Token"
        })
    }
}

module.exports = {
    authFoodPartnerMiddleware,
    authUserMiddleware
}