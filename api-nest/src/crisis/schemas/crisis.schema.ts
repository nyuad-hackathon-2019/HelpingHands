import * as mongoose from 'mongoose';

export const CrisisSchema = new mongoose.Schema({
    charityId: String,
    itemsIds: [String],
    personalSkillsIds: [String],
    location: {
        country: String,
        city: String,
    },
    date: Date,
    title: String,
    causalities: [
        {
            affected_people: Number,
            injured_people: Number,
            dead_people: Number,
            lost_homes: Number,
        },
    ],
});
