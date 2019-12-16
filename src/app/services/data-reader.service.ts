import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataReaderService {

  constructor(private httpClient: HttpClient) { }

  fetchData() {
    const url = 'https://raw.githubusercontent.com/kevmuy/test-frontend/master/RH.json';
    return this.httpClient.get<any>(url);
  }
}
