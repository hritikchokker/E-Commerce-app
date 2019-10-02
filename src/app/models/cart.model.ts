import { ProductDetails } from './product.model';

export interface CartDetails {
  userId: string;
  products: ProductDetails[];
}
