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
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

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
    const stores = await this.dataService.getStoresAsync();
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
}
