import { ICrisis } from './crisis.interface';

export interface ICrisiService {
    findAll(): Promise<ICrisis[]>;
    findById(ID: number): Promise<ICrisis | null>;
    create(todos: ICrisis): Promise<ICrisis>;
    update(ID: number, newValue: ICrisis): Promise<ICrisis | null>;
    delete(ID: number): Promise<string>;
}
