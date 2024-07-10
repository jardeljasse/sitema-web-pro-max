import {model, models, Schema} from "mongoose";

const lessonsSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    file_url:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    trimester:{
        type: String,
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

const Lesson_Model = models.Lesson_Model || model("Lesson_Model", lessonsSchema);
export default Lesson_Model;
