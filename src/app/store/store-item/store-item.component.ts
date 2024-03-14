import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent {
  @Input('item') item: Item | null = null;

  constructor(private cartService: CartService) {}

  addToCart(i: Item) {
    this.cartService.addToCart(i);
  }
}