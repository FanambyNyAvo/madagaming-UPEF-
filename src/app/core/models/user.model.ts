export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: 'En cours' | 'Livré' | 'Annulé';
}

export interface OrderItem {
  productId: number;
  name: string;
  emoji: string;
  platform: string;
  qty: number;
  price: number;
}
