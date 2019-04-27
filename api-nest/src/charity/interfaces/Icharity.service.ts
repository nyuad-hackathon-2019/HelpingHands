import { ICharity } from './charity.interface';

export interface ICharityService {
    findAll(): Promise<ICharity[]>;
    findById(ID: number): Promise<ICharity | null>;
    create(todos: ICharity): Promise<ICharity>;
    update(ID: number, newValue: ICharity): Promise<ICharity | null>;
    delete(ID: number): Promise<string>;
}
