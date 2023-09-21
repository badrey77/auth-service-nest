import { Controller, Post, UnauthorizedException, Body } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('validate')
  async validate(@Body() credentials: { username: string, password: string }): Promise<any> {
    
    
    const user = await this.usersService.validateUser(credentials.username, credentials.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    
    const payload = { username: user.username, sub: user.id };
    const token = this.jwtService.sign(payload, {
      secret: 'puvBfsAI/hHTE1SdtXwLmMK3ysbI/LpLsVKAMvifbycyVCifWFr4d8peVDKZWfac',
    });
    console.log(token);
    
    return { access_token: token };
  }
}
