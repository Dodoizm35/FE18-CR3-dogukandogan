import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  menuItem: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.menuItem = { id: id, name: 'Pizza', description: 'A delicious pizza', price: 10 };
    }
  }

  addToCart(): void {
    this.cartService.addToCart(this.menuItem);
    window.alert('Your item has been added to the cart!');
  }
}