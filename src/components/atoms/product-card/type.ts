export interface ProductProps {
  name: string;
  price: number;
  description: string;
  className?: string;
  image: {
    src: string,
    alt: string
  }
}
