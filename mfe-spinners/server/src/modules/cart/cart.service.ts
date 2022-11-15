import { Injectable } from '@nestjs/common';

import { products, Product } from '../products/products.service';

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  cartItems: CartItem[];
}

const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...products[index],
    quantity: 1,
  })),
});

@Injectable()
export class CartService {
  private carts: Record<number, Cart> = {
    1: initialCart([0, 2, 4]),
    2: initialCart([1, 3]),
  };

  public getById(id: number): Cart {
    return this.carts[id] ?? { cartItems: [] };
  }

  public create(userId: number, id: number): Cart {
    const cart = this.carts[userId];
    const cartItem = cart.cartItems.find((cartItem) => cartItem.id === id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.cartItems.push({
        ...products.find((product) => product.id === id),
        quantity: 1,
      });
    }
    return cart;
  }

  public delete(userId: number): Cart {
    this.carts[userId] = { cartItems: [] };
    return this.carts[userId];
  }
}
