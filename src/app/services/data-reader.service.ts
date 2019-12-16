import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataReaderService {
  url = 'https://raw.githubusercontent.com/kevmuy/test-frontend/master/RH.json';

  constructor(private httpClient: HttpClient) { }

  async fetchDataAsync() {
    return new Promise(resolve => {
      this.httpClient.get<any>(this.url)
        .subscribe(response => {
          resolve(response.response);
        });
    });
  }

  async getUsersAsync() {
    const data: any = await this.fetchDataAsync();
    return data.users;
  }

  async getStoresAsync() {
    const data: any = await this.fetchDataAsync();
    return data.stores;
  }
}
