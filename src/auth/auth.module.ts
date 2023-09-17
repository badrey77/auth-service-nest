import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { HttpBasicStrategy } from './http-basic.strategy';
import { UsersService } from './users/users.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule],
  providers: [HttpBasicStrategy, UsersService],
  exports: [PassportModule],
  controllers: [AuthController],
})
export class AuthModule {}

