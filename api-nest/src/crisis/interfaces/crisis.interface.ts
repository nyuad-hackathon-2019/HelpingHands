import { Document } from 'mongoose';

export interface ICrisis extends Document {
    // tslint:disable-next-line:variable-name
    readonly _id: string;
    readonly charityId: string;
    readonly itemsIds: string[];
    readonly personalSkillsIds: string[];
    readonly location: {
        country: string,
        city: string,
    };
    readonly date: Date;
    readonly title: string;
    readonly causalities: [
        {
            affected_people: number,
            injured_people: number,
            dead_people: number,
            lost_homes: number,
        }
    ];
}
