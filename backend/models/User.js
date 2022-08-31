import mongoose from "mongoose";
import validator from "validator"
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import crypto from "crypto"

const schema = new mongoose.Schema({

//    Name type, required
name:{
    type: String,
    requiered:[true, "Please enter your Name"]
},
//    Email type, required, unique, validate
email:{
    type: String,
    required:[true, "Please enter your Email"],
    unique: true,
    validate: validator.isEmail,
},

//    Password type, required, minLength, select
password: {
    type: String,
    required:[true, "Please enter your Password"],
    minLength: [6, "Password must be at least 6 Characters"],
    select: false,
},
//    Role type, enum, default
role: {
    type: String,
    enum: ["admin","user"],
    default: "user",
},
//    Subscription id, status
subscripton: {
    id: String,
    status: String,
},
//    Avatar public_id, url
avatar: {
    public_id: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
},
//    Playlist [ courseId,poster ]
playlist: [
    {
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
        poster: String,
    },
],
//    CreatedAt type, default
CreatedAt: {
   type: Date,
   default: Date.now,
},
//    ResetPasswordToken type

resetPasswordToken: String,
//    ResetPasswordExpire type
resetPasswordExpire: String,
});

schema.pre("save", async function (next){
    if(!this.isModified("password")) return next();
   this.password = await bcrypt.hash(this.password, 10)
})

schema.methods.getJWTToken = function (){
    return jwt.sign({_id: this._id },process.env.JWT_SECRET,{
        expiresIn: "15d",
    })
}

schema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password,this.password)
}

schema.methods.getResetToken = function() {
     const resetToken = crypto.randomBytes(20).toString("hex");
     
     this.resetPasswordToken = crypto
       .createHash("sha256")  // we use crypto algorithams
       .update(resetToken)
       .digest("hex");

     this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

     return resetToken;
}

export const User = mongoose.model("user", schema);

