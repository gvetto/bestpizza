import { DataReaderService } from './data-reader.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[];

  constructor(private dataReader: DataReaderService) { }

  async validateUserAsync(email: string) {
    const data: any = await this.dataReader.fetchDataAsync();
    return new Promise(resolve => {
      this.users = data.users;
      const isValid = this.users.find(x => x.email === email) !== undefined;
      resolve(isValid);
    });
  }

  logout() {
    //TODO
  }
}
