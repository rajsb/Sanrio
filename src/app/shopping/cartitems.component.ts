import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartitem.model';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styles: []
})
export class CartitemsComponent implements OnInit {

  cartItems: CartItem[] = []  //creating a variable for cart Items so that it can be used in template.
  constructor(private csvc: CartService) {
    this.cartItems = this.csvc.getCartItems()
  }

  ngOnInit() {
  }

  delete(idx: number) {
    this.csvc.deleteCartItem(idx)
  }

  totalAmount() {
    let total = 0;
    for (let e of this.cartItems) {
      total += (e.price * e.qty)
    }
    return total;
  }

}
