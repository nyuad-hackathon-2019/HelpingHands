import { Controller, Get, Response, HttpStatus, Post, Body, Logger } from '@nestjs/common';
import { NeedPhysicalService } from './NeedPhysical.service';
import { CreateNeedPhysicalDto } from './dto/createNeedPhysicalDto';
import { debug } from 'util';

@Controller('NeedPhysical')
export class NeedPhysicalController {
    // tslint:disable-next-line:variable-name
    constructor(private NeedPhysical_service: NeedPhysicalService) {}

    @Get('')
    async getAll(@Response() res) {
        // tslint:disable-next-line:variable-name
        const NeedPhysical_list = await this.NeedPhysical_service.findAll();
        return res.status(HttpStatus.OK).json(NeedPhysical_list);
    }

    @Post('')
    async createNeedPhysical(@Response() res, @Body() body: CreateNeedPhysicalDto) {
        console.log(body);
        const todo = await this.NeedPhysical_service.create(body);
        return res.status(HttpStatus.OK).json(todo);
    }

}
