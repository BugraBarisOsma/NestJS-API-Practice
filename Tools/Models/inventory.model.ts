
import { AuditModel } from "./audit.model";
import { InventoryTypeModel } from "./inventory-type.model";
import { ProductsModel } from "./products.model";

export class InventoryModel{
    id:string;
    barcode:number;
    description: string;
    audit: AuditModel;
    type: InventoryTypeModel;
    product: ProductsModel
}