import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min:3,
        max:20
    },
    email:{
        type: String,
        required: true,
        unique: true,
        max:50
    },
    password:{
        type: String
    },
    img:{
        type: String,
        default: ""
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
}, {timestamps: true});


const postSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        max: 500
    },
    img:{
        type: String
    },
    title:{
        type: String,
        required: true,
        max: 100
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
}, {timestamps: true});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);