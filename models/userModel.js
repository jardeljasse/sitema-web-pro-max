import {models, model, Schema} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true,
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
    role:{
        type: String,
        enum: ["user", "admin", "student", "teacher"],
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
   //creating crypted password with 'bycrypt'
userSchema.pre("save", async function(){
    if(!this.isModified("password")) return;
    //mas se a palavra passe nao for igual ele vai encriptar
    this.password = await bcrypt.hash(this.password, 12)
})

//creating models
const User = models.User || model("User", userSchema)

export default User;