import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../models/item';
import { CartItem } from '../models/cartitem';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  private total: BehaviorSubject<number> = new BehaviorSubject<number>(0.00);

  constructor() { }

  addToCart(item: Item): void {
    const cartItem = this.cartItems.value.find(x => x.id === item.id)
    if (!cartItem) {
      const newItem: CartItem = {
        ...item,
        quantity: 1
      };
      this.cartItems.next([...this.cartItems.value, newItem]);
    } else {
      cartItem.quantity +=1;
    }
    this.fetchTotal();
  }

  removeFromCart(item: CartItem): void {
    const currentItems = this.cartItems.value;
    const itemIndex = currentItems.findIndex(x => x.id === item.id);
    if(currentItems[itemIndex].quantity === 1){
      currentItems.splice(itemIndex, 1);
    } else {
      currentItems[itemIndex].quantity -= 1;
    }
    this.fetchTotal();
  }

  getItems(): Observable<CartItem[]> {
    return this.cartItems.asObservable();
  }

  getTotal(): Observable<number> {
    return this.total.asObservable();
  }
  
  fetchTotal(): void {
    const newTotal = (this.cartItems.value.reduce((x, {price, quantity}) => x + price*quantity, 0));
    const roundTotal = parseFloat(newTotal.toFixed(2));
    this.total.next(roundTotal);
  }
}
