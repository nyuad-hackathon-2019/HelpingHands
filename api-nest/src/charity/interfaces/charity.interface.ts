import { Document } from 'mongoose';

export interface ICharity extends Document {
    // tslint:disable-next-line:variable-name
    readonly charityId: string;
    readonly name: string;
    readonly website: string; 
    readonly location: {
        country: string,
        city: string,
    };
    readonly description: string;
    readonly logoURL: string;
    readonly verifiedCharity: boolean;  

}
