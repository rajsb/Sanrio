import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartitem.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  constructor(private psvc: ProductService, private csvc: CartService) {
    // this.products = this.psvc.getProducts()

    this.psvc.getProducts().subscribe(resp => this.products = resp, err => console.log("Error", err))

  }

  ngOnInit() {
  }

  addToCart(selectedProduct: Product) {
    let newItem = new CartItem(selectedProduct.id, selectedProduct.name, selectedProduct.price, 1)
    this.csvc.addCartItem(newItem)
  }

}
