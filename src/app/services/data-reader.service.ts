import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../models/store';

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
    let i = 0;
    const data: any = await this.fetchDataAsync();
    const stores = data.stores;
    stores.forEach((store: Store) => {
      store.imageUri = IMAGES[i];
      i++;
      if (i > 5) {
        i = 0;
      }
    });

    return stores;
  }

  async getStoreAsync(storeId: number) {
    const stores: any = await this.getStoresAsync();
    return stores.find(x => x.id === storeId);
  }
}

const IMAGES = [
  '/assets/images/Panos_pizza.png',
  '/assets/images/Sbarro.png',
  '/assets/images/pizzeria_camion.png',
  '/assets/images/voglia_di_pizza.png',
  '/assets/images/stroller_pizza.png',
  '/assets/images/trulli.png'
];

