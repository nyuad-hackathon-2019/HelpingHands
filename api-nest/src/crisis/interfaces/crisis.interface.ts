import { Document } from 'mongoose';

export interface ICrisis extends Document {
    // tslint:disable-next-line:variable-name
    readonly title: string;
    readonly location: {
        country: string,
        city: string,
    };
    readonly date: Date;
    readonly causalities: [
        {
            affected_people: number,
            injured_people: number,
            dead_people: number,
            lost_homes: number,
        }
    ];
    readonly description: string 
    readonly mediaURL: string
}
