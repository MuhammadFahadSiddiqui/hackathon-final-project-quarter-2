// src/redux/types.ts

export interface CartItem {
    id: string;
    name: string;
    price: number;
    qty: number;
    countInStock: number;
    images: string[];
  }
  
  export interface RootState {
    cart: {
      cartItems: CartItem[];
    };
  }
  