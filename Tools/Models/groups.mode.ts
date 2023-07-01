import { AuditModel } from "./audit.model";
import { RolesModel } from "./roles.model";

export class GroupsModel{
 id: string;
 name: string;
 description: string;
 roles: RolesModel[]
 audit: AuditModel;
    
}