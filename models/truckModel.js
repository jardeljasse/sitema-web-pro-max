import {Schema, models, model} from "mongoose";

const truckSchema = new Schema({
    truckId: {
        type: Number,
        required: true,
    },
    registration: {
        type: String,
        required: true,
    },
    truckType: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true
    },
    //Monstrando o usuario que fiz a alteracao
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    },
})
//CREATING AN 'MODE'
const Truck = models.Truck || model("Truck", truckSchema);
//const [model_name] = models.[model_name] || model("[model_name]", schema_name);

export default Truck;