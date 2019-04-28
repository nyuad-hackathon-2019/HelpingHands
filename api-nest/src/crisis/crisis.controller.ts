import { Controller, Get, Response, HttpStatus, Post, Body, Logger, Patch, Param, Put } from '@nestjs/common';
import { CrisisService } from './crisis.service';
import { CreateCrisisDto } from './dto/createCrisisDto';
import { async } from 'rxjs/internal/scheduler/async';

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

    @Post('create')
    async createCrisis(@Response() res, @Body() body: CreateCrisisDto) {
        console.log(body);
        const todo = await this.crisis_service.create(body);
        return res.status(HttpStatus.OK).json(todo);
    }

    // NOTE: wrote without testing might work
    @Get('/:crisisId')
    async findCrisis(@Response() res, @Param() param) {
        console.log(param.crisisId);
        const crisis = await this.crisis_service.findById(param.crisisId);
        return res.status(HttpStatus.OK).json(crisis);
    }

    @Patch('update/:crisisId')
    async updateCrisis(@Param() param, @Response() res, @Body() body) {
        console.log('enter update ');
        console.log('crisisId', param.crisisId);
        console.log('request body', body);
        const newCrisis = await this.crisis_service.update(param.crisisId, body);
        return res.status(HttpStatus.OK).json(newCrisis);
    }
}
