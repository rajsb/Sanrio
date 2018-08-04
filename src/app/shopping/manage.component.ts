import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styles: []
})
export class ManageComponent implements OnInit {

  manageProducts: Product[] = []
  frmProduct: Product = new Product(null, null, null, null);
  constructor(private ps: ProductService) {
    // this.manageProducts = this.ps.getProducts()

    this.ps.getProducts().subscribe(
      (resp) => {
        console.log(resp)
        this.manageProducts = resp;
      }, (err) => {
        console.log(err)
      }
    )
  }

  add() {
    this.ps.addProduct(this.frmProduct).subscribe(
      resp => this.manageProducts.push(resp), err => console.log("Error", err)
    )

    // this.frmProduct =
  }

  delete(id: number) {
    this.ps.deleteProduct(id).subscribe(
      (resp) => {
        let idx = this.manageProducts.findIndex((e) => e.id == id);
        this.manageProducts.splice(idx, 1)
      },
      (err) => console.log("Delete error", err)
    )
  }

  edit(selectedProduct: Product) {
    //this.frmProduct = selectedProduct; causes the forma nd table to change

    Object.assign(this.frmProduct, selectedProduct)
  }

  update() {
    this.ps.updateProduct(this.frmProduct).subscribe(
      resp => {
        console.log("Update success")
        let dx = this.manageProducts.findIndex((e) => e.id == resp.id)
        this.manageProducts[dx] = resp;
      }, err => console.log("Error in update")
    )
  }

  ngOnInit() {
  }


}
