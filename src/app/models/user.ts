import { Role } from './enums/role';
export class User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: Role;
    token?: string;
}
