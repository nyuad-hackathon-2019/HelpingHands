import { Controller, Get, Response, HttpStatus, Post, Body, Logger } from '@nestjs/common';
import { NeedSkillService } from './needSkill.service';
import { CreateNeedSkillDto } from './dto/createNeedSkillDto';
import { debug } from 'util';

@Controller('NeedSkill')
export class NeedSkillController {
    // tslint:disable-next-line:variable-name
    constructor(private NeedSkill_service: NeedSkillService) {}

    @Get('')
    async getAll(@Response() res) {
        // tslint:disable-next-line:variable-name
        const NeedSkill_list = await this.NeedSkill_service.findAll();
        return res.status(HttpStatus.OK).json(NeedSkill_list);
    }

    @Post('')
    async createNeedSkill(@Response() res, @Body() body: CreateNeedSkillDto) {
        console.log(body);
        const todo = await this.NeedSkill_service.create(body);
        return res.status(HttpStatus.OK).json(todo);
    }

}
