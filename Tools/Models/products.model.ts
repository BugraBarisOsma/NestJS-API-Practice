
import { AuditModel } from "./audit.model";
import { ProductTypeModel } from "./product-Type.model";

export class ProductsModel{

    id: string;
    name: string;
    type: ProductTypeModel;
    audit: AuditModel
}