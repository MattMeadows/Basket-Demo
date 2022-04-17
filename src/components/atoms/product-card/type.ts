export interface ProductProps {
  id: number;
  name: string;
  price: number;
  description: string;
  className?: string;
  image: {
    src: string,
    alt: string
  }
}
