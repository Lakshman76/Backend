const userModel = require('../models/userSchema');

const emailValidator = require('email-validator');

const signup = async (req, res)=>{
    const {name, email, password, confirmPassword} = req.body;
    try {
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success:false,
                message:"Every field is required"
            })
        }

        // validate email ID
        const validEmail = emailValidator.validate(email);
        if (!validEmail) {
            return res.status(400).json({
                success:false,
                message:"Please provide valid email"
            }) 
        }

        if (password != confirmPassword) {
            return res.status(400).json({
                success:false,
                message:"Password Doesn't Match"
            })
        }

        const userInfo = userModel(req.body);
        const result = await userInfo.save();
        return res.status(200).json({
            success:true,
            data:result
        })

    } catch (err) {
        if(err.code === 11000){
            return res.status(400).json({
                success:false,
                message:"Account already exists"
            })
        }
        return res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

module.exports = {
    signup
}