import { ActivityModel } from "Tools/Models/activity.model";
import { AuditModel } from "Tools/Models/audit.model";
import { InventoryModel } from "Tools/Models/inventory.model";
import { TicketsTypeModel } from "Tools/Models/tickets-type.model";
import { UserModel } from "Tools/Models/user.model";

export class TicketsDTO{
    name: string;
    description: string;
    type: TicketsTypeModel
    responsible:UserModel;
    audit:AuditModel;
    activities: ActivityModel;
    inventories: InventoryModel
}