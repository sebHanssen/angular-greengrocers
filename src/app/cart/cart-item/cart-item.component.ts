import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartitem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input('item') item: CartItem | null = null;

  constructor(private cartService: CartService) {}

  addOne(item: CartItem) {
    if (item) {
      this.cartService.addToCart(item);
    }
  }

  removeOne(item: CartItem) {
    if (item) {
      this.cartService.removeFromCart(item);
    }
  }
}