import * as mongoose from 'mongoose';

export const NeedSkillSchema = new mongoose.Schema({

    name: String, 
    charityId: String,
    crisisId: String,
    quantity: {

        required: Number, 
        provided: Number,

    },
    description: String,
    pictureURL: String, 

});
