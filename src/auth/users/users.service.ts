import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // This is just a mock user for the sake of this example.
  private readonly users = [
    {
      userId: 'user',
      password: 'password',
    },
  ];

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find(user => user.userId === username && user.password === password);
    if (user) {
      return { userId: user.userId };  // return a part of the user info without the password
    }
    return null;
  }
}
