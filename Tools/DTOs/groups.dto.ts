import { RolesDTO } from "./roles.dto";

export class GroupCreateDTO{
    name:string
}

export class GroupRolesDTO{
    roles: RolesDTO[];
}