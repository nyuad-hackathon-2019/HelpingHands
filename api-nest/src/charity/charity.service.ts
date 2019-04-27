import { Injectable } from '@nestjs/common';
import { ICharityService, ICharity } from './interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharityDto } from './dto/createCharityDto';
import { debug } from 'console';

@Injectable()
export class CharityService implements ICharityService {
    constructor(@InjectModel('Charity') private readonly CharityModel: Model<ICharity>) {}
    async findAll(): Promise<ICharity[]> {
        return await this.CharityModel.find().exec();
    }
    async findOne(options: object): Promise<ICharity[]> {
        return await this.CharityModel.find(options).exec();
    }
    async findById(ID: number): Promise<ICharity> {

        return await this.CharityModel.findById(ID).exec();
    }
    async create(todos: CreateCharityDto): Promise<ICharity> {
        const createdTodo = new this.CharityModel(todos);
        return await createdTodo.save();
    }
    async update(ID: number, newValue: ICharity): Promise<ICharity> {
        const todo = await this.CharityModel.findById(ID).exec();

        if (!todo._id) {
            debug('todo not found');
        }

        await this.CharityModel.findByIdAndUpdate(ID, newValue).exec();
        return await this.CharityModel.findById(ID).exec();
    }
    async delete(ID: number): Promise<string> {
        try {
            await this.CharityModel.findByIdAndRemove(ID).exec();
            return 'The todo has been deleted';
        }
        // tslint:disable-next-line:one-line
        catch (err) {
            debug(err);
            return 'The todo could not be deleted';
        }
    }
}
