import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // This is just a mock user for the sake of this example.
  private readonly users = [
    {
      userId: 'user',
      password: 'password',
      id: 1
    },
    {
      userId: 'Badrey',
      password: 'Reynard',
      id: 5
    },
  ];

  findOneById  = (id:string):({userId:string, password:string}|undefined) => (this.users.find(x=>x.userId === id))

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find(user => user.userId === username && user.password === password);
    if (user) {
      return user;  // return a part of the user info without the password
    }
    return null;
  }
}
