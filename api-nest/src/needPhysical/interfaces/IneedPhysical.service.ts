import { INeedPhysical } from './needPhysical.interface';

export interface INeedPhysicalService {
    findAll(): Promise<INeedPhysical[]>;
    findById(ID: number): Promise<INeedPhysical | null>;
    create(todos: INeedPhysical): Promise<INeedPhysical>;
    update(ID: number, newValue: INeedPhysical): Promise<INeedPhysical | null>;
    delete(ID: number): Promise<string>;
}
