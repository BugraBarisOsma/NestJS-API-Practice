import { ActivityModel } from "./activity.model";
import { AuditModel } from "./audit.model";
import { InventoryModel } from "./inventory.model";
import { TicketsTypeModel } from "./tickets-type.model";
import { UserModel } from "./user.model";

export class TicketsModel{
    id:string;
    name:string;
    description: string;
    type: TicketsTypeModel;
    responsible: UserModel;
    audit: AuditModel;
    activities: ActivityModel;
    inventories: InventoryModel;
}