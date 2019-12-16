import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor() { }

  data: Restaurant[] = [{
    imageUri: '/assets/images/Panos_pizza.png',
    name: 'Pano`s Pizza',
    address: 'Calle 54 # 7 - 43'
  }, {
    imageUri: '/assets/images/Sbarro.png',
    name: 'SBarro',
    address: 'Calle 79 # 15 - 32'
  }, {
    imageUri: '/assets/images/pizzeria_camion.png',
    name: 'Pizzeria Camion',
    address: 'Calle 94 # 9 - 76'
  }, {
    imageUri: '/assets/images/voglia_di_pizza.png',
    name: 'Voglia Di Pizza',
    address: 'Carrera 9 # 9 - 87'
  }, {
    imageUri: '/assets/images/stroller_pizza.png',
    name: 'Stroller Pizza',
    address: 'Calle 53 # 4a - 38'
  }, {
    imageUri: '/assets/images/trulli.png',
    name: 'Trulli',
    address: 'Carrera 9 # 66 - 48'
  }];

  ngOnInit() {
  }

}

export class Restaurant {
  imageUri: string;
  name: string;
  address: string;
}
