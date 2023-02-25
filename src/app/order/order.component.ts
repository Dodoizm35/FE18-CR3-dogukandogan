import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../cart.service';

export interface Item {
  id: number;
  name: string;
  description: string;
  quantity: number;
  total: number;
  price: number;
  availability: boolean;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  cartItems: Item[] = [];
  cartTotal = 0;

  constructor(
    private cartService: CartService,
    private cdr: ChangeDetectorRef // ChangeDetectorRef servisi enjekte edildi
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.cartTotal = this.cartService.getTotalPrice();
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getItems();
    this.cartTotal = this.cartService.getTotalPrice();
    window.alert('Item removed from cart!');
    this.cdr.detectChanges(); // Değişikliği bildir
  }

  checkout() {
    // Burada checkout işlemlerini gerçekleştirebilirsiniz
  }
}