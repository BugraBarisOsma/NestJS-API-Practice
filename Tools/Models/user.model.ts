
import { AuditModel } from './audit.model';
import { GroupsModel } from './groups.mode';
import { RolesModel } from './roles.model';
import * as mongoose from 'mongoose';

export class UserModel {
  id: string;
  name: string;
  surname: string;
  image: string;
  email: string;
  password: string;
  passwordHash: string;
  birthDay: Date;
  audit: AuditModel;
  roles: RolesModel[];
  groups: GroupsModel[];
}

export const UserSchema = new mongoose.Schema({
  
  name: String,
  surname: String,
  email: String,
  birthDay: Date,
  audit: Object,
  roles: Array,
  groups: Array,
},{timestamps:true});
