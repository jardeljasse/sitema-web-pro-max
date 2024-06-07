import { Schema, models, model } from "mongoose";

const studentSchema = new Schema({
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
bornPlace:{
    type: String,
    required: true,
},
gender:{
    type: String,
    enum: ['M', 'F'],
    required: true,
},
city:{
    type: String,
    required: true,
},
neighbornhood:{
    type: String,
    required: true,
},
sponsorContact:{
    type: Number,
    required: true,
},
/*healthExame:{
    type: String,
    required: true,
},*/
desease:{
    type: String,
    required: true,
},
user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
},
progress:{
    type: Number,
},
createdAt:{
    type: Date,
    required: true,
},
updatedAt:{
    type: Date,
    required: true,
}

});
const Student_Model = models.Student_Model  || model("Student_Model", studentSchema);
export default Student_Model;