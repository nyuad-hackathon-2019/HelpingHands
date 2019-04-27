import * as mongoose from 'mongoose';

export const CrisisSchema = new mongoose.Schema({
    title: String,
    location: {
        country: String,
        city: String,
    },
    date: Date,
    causalities: [
        {
            affected_people: Number,
            injured_people: Number,
            dead_people: Number,
            lost_homes: Number,
        },
    ],
    description: String,
    medialURL: String,  
});
