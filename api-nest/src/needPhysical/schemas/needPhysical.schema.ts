import * as mongoose from 'mongoose';

export const NeedPhysicalSchema = new mongoose.Schema({

    name: String, 
    charityId: String,
    crisisId: String,
    quantity: {

        required: Number, 
        provided: Number,

    },
    description: String,
    helpMethods: {
        dropOff: {

            active: Boolean,
            dropOffLocations: String,

        },
        monetaryDonation: {

            active: Boolean,
            donationInstructions: String,

        },
    },
    pictureURL: String, 

});
