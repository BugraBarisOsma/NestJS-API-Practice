import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDTO, UserUpdateDTO } from 'Tools/DTOs/user.dto';
import { UserModel } from 'Tools/Models/user.model';

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}
  @Patch(':id')
  async updateUser(@Param() params,@Body() body: UserUpdateDTO):Promise<UserModel> {
    return this.userService.update(params.id,body);
  }

  @Post()
  async createUser(@Body() body: UserCreateDTO): Promise<UserModel> {
    return await this.userService.create(body);
  }
  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return await this.userService.findAll();
  }
  @Get(':id')
  async getUser(@Param() params): Promise<UserModel> {
    return await this.userService.find(params.id);
  }
  @Delete()
  async delete(@Body() body: UserModel):Promise<UserModel> {
    return await this.userService.delete(body.id);
  }
}
