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

  model: Store;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataReaderService) { }


  ngOnInit() {
    this.loadStore();
  }

  async loadStore() {
    const storeId = this.route.snapshot.paramMap.get('id');
    const store = await this.dataService.getStoreAsync(Number.parseInt(storeId));
    this.model = store;
  }
}
