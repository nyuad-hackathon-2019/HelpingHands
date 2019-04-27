import { Document } from 'mongoose';

export interface INeedPhysical extends Document {
    // tslint:disable-next-line:variable-name
    readonly name: string; 
    readonly charityId: string;
    readonly crisisId: string;
    readonly quantity:{

        required: number, 
        provided: number,

    };
    readonly description: string;
    readonly helpMethods: {
        dropOff: {

            active: boolean,
            dropOffLocations: string,

        },
        monetaryDonation: {

            active: boolean,
            donationInstructions: string,

        },
    };
    readonly pictureURL: string; 

}