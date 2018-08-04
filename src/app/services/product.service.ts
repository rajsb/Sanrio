import { Injectable } from '@angular/core'
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http'


@Injectable()

export class ProductService {
    private productsData: Product[] = []
    RESTUrl = "http://localhost:3000/wsproducts"
    constructor(private http: HttpClient) {

        // this.productsData = [new Product(1, "Aggretsuko", 65000, "Very Angry"),
        // new Product(2, "Gudetama", 65000, "Egg"),
        // new Product(3, "Pom pom purin", 65000, "ice cream"),
        // new Product(4, "Shinkansen", 65000, "train"),
        // new Product(5, "Chococat", 65000, "Cat"),
        // new Product(5, "SugarBunnies", 65000, "Bunny")]


    }
    getProducts() {
        // return this.productsData;
        return this.http.get<Product[]>(this.RESTUrl)
    }
    addProduct(newproduct: Product) {
        return this.http.post<Product>(this.RESTUrl, newproduct)
    }
    deleteProduct(id: number) {
        return this.http.delete(this.RESTUrl + "/" + id)
    }
    updateProduct(modifiedProduct: Product) {
        return this.http.put<Product>(this.RESTUrl + "/" + modifiedProduct.id, modifiedProduct)
    }
}
