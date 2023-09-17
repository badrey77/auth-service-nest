import { Controller, Post, UnauthorizedException, Body } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('validate')
  async validate(@Body() credentials: { username: string, password: string }): Promise<any> {
    const user = await this.usersService.validateUser(credentials.username, credentials.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
