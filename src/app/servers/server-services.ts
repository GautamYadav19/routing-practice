import { UsersInformation } from '../share/users';

export class ServerService {
  users: UsersInformation[] = [
    new UsersInformation('testname1', 'active'),
    new UsersInformation('testname2', 'Inactive'),
  ];
  getUserInformation() {
    console.log('from services' + this.users);
    return this.users;
  }
}
