import { Product } from './product.model';

export interface CartItem {
  key: string;
  product: Product;
  platform: string;
  qty: number;
}
