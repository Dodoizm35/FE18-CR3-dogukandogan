import { Injectable } from '@angular/core';
//import { Item } from './order/order.component';
import { Item } from './menu/menu.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = [];

  constructor() { }

  addToCart(item: Item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalPrice() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  removeFromCart(item: Item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}