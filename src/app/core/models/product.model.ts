export type BadgeType = 'sale' | 'new' | 'top';

export interface Product {
  id: number;
  name: string;
  genre: string;
  platform: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  emoji: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: BadgeType;
  desc: string;
  new: boolean;
  studio: string;
}