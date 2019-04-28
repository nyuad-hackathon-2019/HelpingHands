import { ICrisis } from './crisis.interface';
import { CreateCrisisDto } from '../dto/createCrisisDto';

export interface ICrisiService {
    findAll(): Promise<ICrisis[]>;
    findById(ID: number): Promise<ICrisis | null>;
    create(todos: CreateCrisisDto): Promise<ICrisis>;
    update(ID: number, newValue: ICrisis): Promise<ICrisis | null>;
    delete(ID: number): Promise<string>;
}
