import { AuthService } from './../../services/auth.service';
import { DataReaderService } from './../../services/data-reader.service';
import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  loading: boolean = false;
  model: Store;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataReaderService) { }

  sizes = [{
    id: 1,
    label: 'Personal'
  }, {
    id: 2,
    label: 'Mediana'
  }, {
    id: 3,
    label: 'Grande'
  }]

  ngOnInit() {
    const storeId = this.route.snapshot.paramMap.get('id');
    this.loadStore(storeId);
  }

  async loadStore(storeId) {
    let store = await this.dataService.getStoreAsync(Number.parseInt(storeId));
    this.model = store;
    this.loading = true;
  }

  addPizza() {

  }
}
