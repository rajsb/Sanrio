import { Injectable } from "@angular/core"
import { CartItem } from "../models/cartitem.model";

@Injectable()
export class CartService {
    private CartItemsData: CartItem[] = [];

    //Retrieve Cart Data
    getCartItems() {
        return this.CartItemsData;
    }

    //Add New Item in Cart
    addCartItem(newitem: CartItem) {
        this.CartItemsData.push(newitem);
    }

    //delete existing cart item
    deleteCartItem(idx: number) {
        this.CartItemsData.splice(idx, 1)
    }
}