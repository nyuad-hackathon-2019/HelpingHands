import { Controller, Get, Response, HttpStatus, Post, Body, Logger } from '@nestjs/common';
import { CharityService } from './charity.service';
import { CreateCharityDto } from './dto/createCharityDto';
import { debug } from 'util';

@Controller('Charity')
export class CharityController {
    // tslint:disable-next-line:variable-name
    constructor(private Charity_service: CharityService) {}

    @Get('')
    async getAll(@Response() res) {
        // tslint:disable-next-line:variable-name
        const Charity_list = await this.Charity_service.findAll();
        return res.status(HttpStatus.OK).json(Charity_list);
    }

    @Post('')
    async createCharity(@Response() res, @Body() body: CreateCharityDto) {
        console.log(body);
        const todo = await this.Charity_service.create(body);
        return res.status(HttpStatus.OK).json(todo);
    }

}
