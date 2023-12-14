import {models, model, Schema} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    birthday:{
        type: Date,
        required: true
    },
    gender:{
        type: String,
        enum: ["M", "F", "X"],
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    role:{
        type: String,
        enum: ["admin", "usuário"],
        required: true
    },
    createdAt:{
        type: Date,
        required: true
    },
    updatedAt:{
        type: Date,
        required: true
    }
});
   //creating user
userSchema.pre("save", async function(){
    if(!this.isModified("password")) return;
    //mas se a palavra passe nao for igual ele vai encriptar
    this.password = await bcrypt.hash(this.password, 12)
})

//creating models
const User = models.User || model("User", userSchema)

export default User;