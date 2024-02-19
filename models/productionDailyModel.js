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
        required: false,
        default: function(){
           return this.mass2 - this.mass1;
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
// Creaitng middleware to update values in table, when theses is updating on the <inpu />

productionSchema.pre("findOneAndUpdate", function(){
    const update = this.getUpdate();
    this.set({
        netMass: update.mass2 - update.mass1,
    });
});


//this name will be created as a 'collection' in mongodb, but adding apend 's' after the name. Will be so: production_models, intead, production_model

const Production_Model = models.Production_Model || model("Production_Model", productionSchema);

export default Production_Model;