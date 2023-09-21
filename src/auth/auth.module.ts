import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { UsersService } from './users/users.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [JwtModule.register({
    secret: 'puvBfsAI/hHTE1SdtXwLmMK3ysbI/LpLsVKAMvifbycyVCifWFr4d8peVDKZWfac', 
    signOptions: { expiresIn: '60m' },
  })],
  providers: [UsersService ,JwtService,],
  controllers: [AuthController],
})
export class AuthModule {}

