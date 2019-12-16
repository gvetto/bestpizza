import { AuthService } from './../../services/auth.service';
import { DataReaderService } from './../../services/data-reader.service';
import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private dataService: DataReaderService) { }

  data: Store[];
  filteredData: Observable<Store[]>;
  formStores: FormGroup;

  ngOnInit() {
    this.formStores = this.fb.group({
      filterValue: ['']
    });

    this.loadStores();
  }

  private async loadStores() {
    let i = 0;
    const stores = await this.dataService.getStoresAsync();
    stores.forEach((store: Store) => {
      store.imageUri = IMAGES[i];
      i++;
      if (i > 5) {
        i = 0;
      }
    });

    this.data = stores;

    this.filteredData = this.formStores.get('filterValue')
      .valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterStores(value))
      );
  }

  private _filterStores(value: string): Store[] {
    const result = this.data.filter(x => x.name.toLowerCase().includes(value));
    return result;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
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
