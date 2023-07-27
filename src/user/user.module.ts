import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from 'Tools/Models/user.model';
import { Mongoose } from 'mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports:[MongooseModule.forFeature([{name:'User',schema:UserSchema}])],
    controllers:[UserController],
    providers:[UserService]
})
export class UserModule {}