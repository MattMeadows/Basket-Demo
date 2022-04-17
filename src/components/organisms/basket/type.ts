
export interface CartItem {
  name: string
  image: {
    src: string;
    alt: string;
  }
  qty: number;
  price: number
  id: number
}


export interface Props {
  cartItems: CartItem[];
}