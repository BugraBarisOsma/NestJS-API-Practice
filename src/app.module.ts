import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import enviroment from 'Tools/enviroment/enviroment';


@Module({
  imports: [UserModule,MongooseModule.forRoot(enviroment.mongoUrl)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
