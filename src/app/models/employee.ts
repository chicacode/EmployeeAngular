import { Role } from '@app/models/enums/role';
export interface Employee {
    id: number;
    name: string;
    lastName: string;
    positionJob: string;
    salary: number;
    userName: string;
    password: string;
    isAdmin: Role.Admin;
}
