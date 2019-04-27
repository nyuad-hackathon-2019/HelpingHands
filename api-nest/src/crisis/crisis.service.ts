import { Injectable } from '@nestjs/common';
import { ICrisiService, ICrisis } from './interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCrisisDto } from './dto/createCrisisDto';
import { debug } from 'console';

@Injectable()
export class CrisisService implements ICrisiService {
    constructor(@InjectModel('Crisis') private readonly crisisModel: Model<ICrisis>) {}
    async findAll(): Promise<ICrisis[]> {
        return await this.crisisModel.find().exec();
    }
    async findOne(options: object): Promise<ICrisis[]> {
        return await this.crisisModel.find(options).exec();
    }
    async findById(ID: number): Promise<ICrisis> {
        return await this.crisisModel.findById(ID).exec();
    }
    async create(todos: CreateCrisisDto): Promise<ICrisis> {
        const createdTodo = new this.crisisModel(todos);
        return await createdTodo.save();
    }
    async update(ID: number, newValue: ICrisis): Promise<ICrisis> {
        const todo = await this.crisisModel.findById(ID).exec();

        if (!todo._id) {
            debug('todo not found');
        }

        await this.crisisModel.findByIdAndUpdate(ID, newValue).exec();
        return await this.crisisModel.findById(ID).exec();
    }
    async delete(ID: number): Promise<string> {
        try {
            await this.crisisModel.findByIdAndRemove(ID).exec();
            return 'The todo has been deleted';
        }
        // tslint:disable-next-line:one-line
        catch (err) {
            debug(err);
            return 'The todo could not be deleted';
        }
    }
}
