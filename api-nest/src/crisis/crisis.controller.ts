import { Controller, Get, Response, HttpStatus } from '@nestjs/common';
import { CrisisService } from './crisis.service';

@Controller('crisis')
export class CrisisController {
    // tslint:disable-next-line:variable-name
    constructor(private crisis_service: CrisisService) {}

    @Get('')
    async getAll(@Response() res) {
        // tslint:disable-next-line:variable-name
        const crisis_list = await this.crisis_service.findAll();
        return res.status(HttpStatus.OK).json(crisis_list);
    }

}
