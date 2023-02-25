import { Component } from '@angular/core';
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
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems = [
    {
      id: 1,
      name: 'Pepperoni Pizza',
      description: 'Pepperoni, Mozzarella cheese, Tomato sauce, Pizza dough',
      price: 9.99,
      quantity: 1,
      total: 0,
      image: 'https://cdn.shortpixel.ai/spai/ret_img/https://www.motioncooking.com/wp-content/uploads/2021/11/Pizza-Diavolo-3.webp',
      availability: false
    },
    {
      id: 2,
      name: 'Quattro Stagioni Pizza',
      description: 'tomato sauce, mozzarella cheese, cooked ham, artichokes, mushrooms, and black olives',
      price: 8.99,
      quantity: 1,
      total: 0,
      image: 'https://cdn.shortpixel.ai/spai/ret_img/https://www.motioncooking.com/wp-content/uploads/2021/11/Pizza-Diavolo-3.webp',
      availability: true
    },
    {
      id: 3,
      name: 'Diavolo Pizza',
      description: 'tomato sauce, mozzarella cheese, spicy salami, pepperoni, red pepper flakes, onions',
      price: 10.99,
      quantity: 1,
      total: 0,
      image: 'https://cdn.shortpixel.ai/spai/ret_img/https://www.motioncooking.com/wp-content/uploads/2021/11/Pizza-Diavolo-3.webp',
      availability: true
    }
  ];

  constructor(private cartService: CartService) { }

  addToCart(item: Item): void {
    item.quantity++;
    item.total = item.price * item.quantity;
    this.cartService.addToCart(item);
    window.alert('Item add from cart!');
  }

}