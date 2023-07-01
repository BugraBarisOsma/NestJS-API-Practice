import { GroupsModel } from 'Tools/Models/groups.mode';
import { RolesModel } from 'Tools/Models/roles.model';

export class UserCreateDTO {
  name: string;
  surname: string;
  image: string;
  password: string;
  email: string;
  birthDate: Date;
}
export class UserUpdateDTO {
  name: string;
  surname: string;
  image: string;
  password: string;
  email: string;
  birthDay: Date;
  roles: RolesModel[];
  groups: GroupsModel[];
}

export class UserLoginDTO {
  email: string;
  password: string;
}
