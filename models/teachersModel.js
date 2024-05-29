import {Schema, models, model} from "mongoose";

const teachersSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
    },
    birthDay:{
        type: Date,
        required: true,
    },
    nacionality:{
        type: String,
        required: true,
    },
    province:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        enum: ['M', 'F'],
        required: true,
    },
    formation:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    number:{
        type: Number,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    createdAt:{
        type: Date,
        required: true,
    },
    updatedAt:{
        type: Date,
        required: true,
    }
    
})

const Teacher_Model = models.Teacher_Model || model("Teacher_Model", teachersSchema);
export default Teacher_Model;