import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  items: Item[] = [];

  constructor(private readonly storeService: StoreService) {}

  ngOnInit() {
    this.sortDefault();
  }

  sortPriceAscending() {
    this.items.sort((a, b) => a.price - b.price);
  }

  sortPriceDescending() {
    this.items.sort((a, b) => b.price - a.price);
  }

  sortName() {
    this.items.sort((a, b) => a.name.localeCompare(b.name));
  }

  async sortDefault() {
    this.items = await this.storeService.storeItems;
  }
}