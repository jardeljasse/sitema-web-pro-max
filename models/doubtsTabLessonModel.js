import {model, models, Schema} from "mongoose";


const doubtsLessonSchema = new Schema({
    doubt: {
        type: String,
        required: true,
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
});

const DoubtsLesson_Model = models.DoubtsLesson_Model || model("DoubtsLesson_Model", doubtsLessonSchema);
export default DoubtsLesson_Model;

