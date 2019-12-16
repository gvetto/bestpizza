import { DataReaderService } from './data-reader.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[];

  constructor(private dataReader: DataReaderService) { }

  validateUser(email: string) {
    this.dataReader.fetchData()
      .subscribe(response => {
        this.users = response.users;
        const isValid = this.users.find(x => x.email === email) !== null;
        return isValid;
      });
  }
}
