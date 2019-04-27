export class CreateNeedSkillDto {
    // tslint:disable-next-line:variable-name
    readonly name: string; 
    readonly charityId: string;
    readonly crisisId: string;
    readonly quantity:{

        required: number, 
        provided: number,

    };
    readonly description: string;
    readonly pictureURL: string; 
}
