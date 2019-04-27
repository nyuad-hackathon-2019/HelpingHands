import { INeedSkill } from './needSkill.interface';

export interface INeedSkillService {
    findAll(): Promise<INeedSkill[]>;
    findById(ID: number): Promise<INeedSkill | null>;
    create(todos: INeedSkill): Promise<INeedSkill>;
    update(ID: number, newValue: INeedSkill): Promise<INeedSkill | null>;
    delete(ID: number): Promise<string>;
}
