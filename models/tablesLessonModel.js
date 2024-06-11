import {model, models, Schema} from "mongoose";


const lessonSchema = new Schema({
    doubts: {
        type: String
    },
    user:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User", 
    },
    createdAt:{
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    }
})