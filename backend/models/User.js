import mongoose from "mongoose";
import validator from "validator"

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
    },
],
//    CreatedAt type, default
CreatedAt: {
   type: Date,
   default: Date.now,
},
//    ResetPasswordToken type

ResetPasswordToken: String,
//    ResetPasswordExpire type
ResetPasswordExpire: String,
});

export const User = mongoose.model("user", schema);

