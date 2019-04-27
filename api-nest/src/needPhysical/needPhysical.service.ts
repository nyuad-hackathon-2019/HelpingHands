import { Injectable } from '@nestjs/common';
import { INeedPhysicalService, INeedPhysical } from './interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNeedPhysicalDto } from './dto/createNeedPhysicalDto';
import { debug } from 'console';

@Injectable()
export class NeedPhysicalService implements INeedPhysicalService {
    constructor(@InjectModel('NeedPhysical') private readonly NeedPhysicalModel: Model<INeedPhysical>) {}
    async findAll(): Promise<INeedPhysical[]> {
        return await this.NeedPhysicalModel.find().exec();
    }
    async findOne(options: object): Promise<INeedPhysical[]> {
        return await this.NeedPhysicalModel.find(options).exec();
    }
    async findById(ID: number): Promise<INeedPhysical> {

        return await this.NeedPhysicalModel.findById(ID).exec();
    }
    async create(todos: CreateNeedPhysicalDto): Promise<INeedPhysical> {
        const createdTodo = new this.NeedPhysicalModel(todos);
        return await createdTodo.save();
    }
    async update(ID: number, newValue: INeedPhysical): Promise<INeedPhysical> {
        const todo = await this.NeedPhysicalModel.findById(ID).exec();

        if (!todo._id) {
            debug('todo not found');
        }

        await this.NeedPhysicalModel.findByIdAndUpdate(ID, newValue).exec();
        return await this.NeedPhysicalModel.findById(ID).exec();
    }
    async delete(ID: number): Promise<string> {
        try {
            await this.NeedPhysicalModel.findByIdAndRemove(ID).exec();
            return 'The todo has been deleted';
        }
        // tslint:disable-next-line:one-line
        catch (err) {
            debug(err);
            return 'The todo could not be deleted';
        }
    }
}
