import { Injectable } from '@nestjs/common';
import { INeedSkillService, INeedSkill } from './interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNeedSkillDto } from './dto/createNeedSkillDto';
import { debug } from 'console';

@Injectable()
export class NeedSkillService implements INeedSkillService {
    constructor(@InjectModel('NeedSkill') private readonly NeedSkillModel: Model<INeedSkill>) {}
    async findAll(): Promise<INeedSkill[]> {
        return await this.NeedSkillModel.find().exec();
    }
    async findOne(options: object): Promise<INeedSkill[]> {
        return await this.NeedSkillModel.find(options).exec();
    }
    async findById(ID: number): Promise<INeedSkill> {

        return await this.NeedSkillModel.findById(ID).exec();
    }
    async create(todos: CreateNeedSkillDto): Promise<INeedSkill> {
        const createdTodo = new this.NeedSkillModel(todos);
        return await createdTodo.save();
    }
    async update(ID: number, newValue: INeedSkill): Promise<INeedSkill> {
        const todo = await this.NeedSkillModel.findById(ID).exec();

        if (!todo._id) {
            debug('todo not found');
        }

        await this.NeedSkillModel.findByIdAndUpdate(ID, newValue).exec();
        return await this.NeedSkillModel.findById(ID).exec();
    }
    async delete(ID: number): Promise<string> {
        try {
            await this.NeedSkillModel.findByIdAndRemove(ID).exec();
            return 'The todo has been deleted';
        }
        // tslint:disable-next-line:one-line
        catch (err) {
            debug(err);
            return 'The todo could not be deleted';
        }
    }
}
