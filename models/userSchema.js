const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "User name is required"],
        minLength:[5, "Name must be atleast 5 character"],
        maxLength:[30, "Name must be less than 30 character"],
        trim:true
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        select:false
    },
    forgotPasswordToken:{
        type:String
    },
    forgotPasswordExpiryDate:{
        type:String
    }
},{
    timestamps:true
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;