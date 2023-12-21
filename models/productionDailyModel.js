import {Schema, models, model} from "mongoose";

const productionSchema = new Schema({
    truckId: {
        type: Number,
        required: true,
    },
    driver: {
        type: String,
        required: true,
    },
    mass1: {
        type: Number,
        required: true,
    },
    mass2: {
        type: Number,
        required: true,
    },
    netMass: {
        type: Number,
        required: true,
        default: function(){
           return this.mass2 - this.mass1
        },
    },
    dateIn: {
        type: Date,
        required: true,
    },
    dateOut: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
    },// to get the 'User' that made changes
    user :{
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
});

const Production_Model = models.Production_Model || model("Production_Model", productionSchema);

export default Production_Model;