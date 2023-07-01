import { AuditModel } from './audit.model';
import { GroupsModel } from './groups.mode';
import { RolesModel } from './roles.model';

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
