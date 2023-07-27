import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserCreateDTO, UserUpdateDTO } from 'Tools/DTOs/user.dto';
import { AuditModel } from 'Tools/Models/audit.model';
import { UserModel } from 'Tools/Models/user.model';
import { Model } from 'mongoose';


@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userMongo: Model<UserModel>,
  ) {}
  async create(user: UserCreateDTO): Promise<UserModel> {
    const audit = new AuditModel();
    audit.active = true;
    audit.createdBy = 'admin';
    const createdUser = new this.userMongo({ ...user, ...audit });

    return await createdUser.save();
  }
  async findAll():Promise<UserModel[]>{

    return await this.userMongo.find().exec()
  }
  async find(id:string):Promise<UserModel>{

    return await this.userMongo.findById({_id : id}).exec()
  }

  async delete(id:string):Promise<UserModel>{
    return await this.userMongo.findByIdAndDelete({_id: id})
  }
  async update(id:String,user:UserUpdateDTO):Promise<UserModel>{
        let newModel = this.userMongo.findOne({_id:id}).exec()
        newModel = {...newModel,...user}

        return await this.userMongo.findByIdAndUpdate(id,newModel,{new:true}).exec()
    }
}
