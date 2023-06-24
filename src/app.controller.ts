import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from '../types/dtos';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/register")
  public async register(@Body() userDto: UserDto): Promise<string> {
    return await this.appService.post("");
  }
}
