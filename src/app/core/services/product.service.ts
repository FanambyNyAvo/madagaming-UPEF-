import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly _products = signal<Product[]>([
    {
      id: 1, name: "God of War Ragnarök", genre: "Action-Aventure", platform: "PS5",
      price: 89000, oldPrice: 120000, discount: 26, emoji: "⚔️",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
      rating: 4.9, reviews: 1842, badge: "sale",
      desc: "Kratos et Atreus s'embarquent dans un voyage épique à travers les neuf royaumes nordiques.",
      new: false, studio: "Santa Monica Studio"
    },
    {
      id: 2, name: "Spider-Man 2", genre: "Action", platform: "PS5",
      price: 105000, emoji: "🕷️",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c5b3f1e0fda022747b4f7b86e947eb7040b8030c22e88ef.png",
      rating: 4.9, reviews: 2134, badge: "new",
      desc: "Peter Parker et Miles Morales s'associent pour défendre New York.",
      new: true, studio: "Insomniac Games"
    },
    {
      id: 3, name: "Elden Ring", genre: "RPG", platform: "PS5",
      price: 75000, emoji: "🐉",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhojersey6MQpnm2nQ8cBBgd.png",
      rating: 5.0, reviews: 3421, badge: "top",
      desc: "Un RPG d'action dans un vaste monde ouvert, avec une histoire signée George R.R. Martin.",
      new: false, studio: "FromSoftware"
    },
    {
      id: 4, name: "Zelda: Tears of the Kingdom", genre: "Aventure", platform: "Nintendo Switch",
      price: 82000, emoji: "🗡️",
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000063714/c42553b4fd0312c31e70b23b5e7a8c9cf2a8e0d5d91a0e2a9d4a80ecf2c2b11",
      rating: 4.9, reviews: 2890, badge: "new",
      desc: "Explorez les cieux et les profondeurs d'Hyrule dans cette suite épique.",
      new: true, studio: "Nintendo"
    },
    {
      id: 5, name: "Hogwarts Legacy", genre: "RPG", platform: "PC",
      price: 62000, oldPrice: 85000, discount: 27, emoji: "🧙",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_600x900.jpg",
      rating: 4.7, reviews: 987, badge: "sale",
      desc: "Vivez votre aventure au château de Poudlard dans ce RPG ouvert.",
      new: false, studio: "Avalanche Software"
    },
    {
      id: 6, name: "Halo Infinite", genre: "FPS", platform: "Xbox",
      price: 68000, emoji: "🪖",
      image: "https://store-images.s-microsoft.com/image/apps.1639.13727851868390641.c9cc5bc4-0dc9-40ba-8610-205de7f7f6af.4c1b8fc6-a5c5-4f34-af0e-af3f32c7f4da",
      rating: 4.6, reviews: 1204,
      desc: "Master Chief revient pour protéger l'humanité contre les Bannis.",
      new: false, studio: "343 Industries"
    },
    {
      id: 7, name: "EA Sports FC 25", genre: "Sport", platform: "PS5",
      price: 92000, oldPrice: 110000, discount: 16, emoji: "⚽",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202407/0916/b1a2cc27dedd7c507b35a8d36bfe1d9b3b3e21cf91e37741.png",
      rating: 4.4, reviews: 3120, badge: "sale",
      desc: "Le meilleur du football mondial avec les licences officielles.",
      new: false, studio: "EA Sports"
    },
    {
      id: 8, name: "Mario Kart 8 Deluxe", genre: "Course", platform: "Nintendo Switch",
      price: 70000, emoji: "🏎️",
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000000153/c8935e9b4a06c3c4a2c20a98f45d40eae24e7a3f",
      rating: 4.8, reviews: 4560, badge: "top",
      desc: "La course ultime en famille avec Mario et ses amis.",
      new: false, studio: "Nintendo"
    },
    {
      id: 9, name: "Cyberpunk 2077", genre: "RPG", platform: "PC",
      price: 55000, oldPrice: 80000, discount: 31, emoji: "🌆",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
      rating: 4.7, reviews: 2340, badge: "sale",
      desc: "Night City, un monde ouvert cyberpunk où vous incarnez un mercenaire.",
      new: false, studio: "CD Projekt Red"
    },
    {
      id: 10, name: "Starfield", genre: "RPG", platform: "Xbox",
      price: 85000, emoji: "🚀",
      image: "https://store-images.s-microsoft.com/image/apps.64062.13700520908591748.5e4f0e3a-8af1-44a7-9494-ee9a1c6f3030.b9c6d428-c0e7-4ce6-9d50-9b4f6c9b9f99",
      rating: 4.5, reviews: 1876, badge: "new",
      desc: "Explorez plus de 1000 planètes dans cet immense RPG spatial.",
      new: true, studio: "Bethesda Game Studios"
    },
    {
      id: 11, name: "Pokémon Violet", genre: "RPG", platform: "Nintendo Switch",
      price: 72000, emoji: "🔴",
      image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000063401/4f4c44ddd3e4bde695a5aab4b3b4eb76dda92b9c",
      rating: 4.4, reviews: 2100, badge: "new",
      desc: "Partez à l'aventure en monde ouvert dans la région de Paldea.",
      new: true, studio: "Game Freak"
    },
    {
      id: 12, name: "Casque Gaming PS5", genre: "Accessoire", platform: "Accessoires",
      price: 48000, emoji: "🎧",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202009/0116/IwFfxHlPTqxkHJvQe0K0l8MY.png",
      rating: 4.8, reviews: 567, badge: "new",
      desc: "Casque sans fil Pulse 3D pour PlayStation 5. Audio 3D immersif.",
      new: true, studio: "Sony"
    },
    {
      id: 13, name: "Manette PS5 DualSense", genre: "Accessoire", platform: "Accessoires",
      price: 45000, emoji: "🎮",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202009/0116/mWx54OzGp4LkHrJNDfzRjpkh.png",
      rating: 4.9, reviews: 892, badge: "top",
      desc: "La manette DualSense avec retour haptique et gâchettes adaptatives.",
      new: false, studio: "Sony"
    },
    {
      id: 14, name: "Minecraft", genre: "Sandbox", platform: "PC",
      price: 35000, emoji: "⛏️",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/library_600x900.jpg",
      rating: 4.9, reviews: 5230, badge: "top",
      desc: "Construisez, explorez et survivez dans un monde infini de blocs.",
      new: false, studio: "Mojang"
    },
    {
      id: 15, name: "GTA V Premium", genre: "Action", platform: "PS4",
      price: 38000, oldPrice: 55000, discount: 31, emoji: "🚗",
      image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRSMEFmGKHHgJnEjIqWyKh.png",
      rating: 4.7, reviews: 4100, badge: "sale",
      desc: "Grand Theft Auto V avec toutes les extensions. Los Santos vous attend.",
      new: false, studio: "Rockstar Games"
    },
    {
      id: 16, name: "Red Dead Redemption 2", genre: "Action-Aventure", platform: "PS4",
      price: 48000, emoji: "🤠",
      image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/L9E6tMB3sOXIv7QFQFVO7GLTI.png",
      rating: 5.0, reviews: 3780, badge: "top",
      desc: "Vivez l'aventure western ultime dans un monde ouvert époustouflant.",
      new: false, studio: "Rockstar Games"
    },
  ]);

  readonly categories = ['Tous', 'PS5', 'PS4', 'Xbox', 'Nintendo Switch', 'PC', 'Accessoires', 'Nouveautés', 'Soldes'];

  readonly platforms = [
    { name: 'PS5', icon: '🎮', count: '42 jeux', route: 'PS5' },
    { name: 'PS4', icon: '🕹️', count: '86 jeux', route: 'PS4' },
    { name: 'Xbox', icon: '🎯', count: '38 jeux', route: 'Xbox' },
    { name: 'Switch', icon: '🔴', count: '54 jeux', route: 'Nintendo Switch' },
    { name: 'PC', icon: '💻', count: '120 jeux', route: 'PC' },
    { name: 'Accessoires', icon: '🎧', count: '35 articles', route: 'Accessoires' },
  ];

  getAll(): Product[] { return this._products(); }

  getById(id: number): Product | undefined {
    return this._products().find(p => p.id === id);
  }

  getFiltered(category: string, sort: string): Product[] {
    let products = [...this._products()];
    if (category === 'Nouveautés') products = products.filter(p => p.new);
    else if (category === 'Soldes') products = products.filter(p => !!p.oldPrice);
    else if (category !== 'Tous') products = products.filter(p => p.platform === category);
    switch (sort) {
      case 'price-asc': return products.sort((a, b) => a.price - b.price);
      case 'price-desc': return products.sort((a, b) => b.price - a.price);
      case 'name': return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'rating': return products.sort((a, b) => b.rating - a.rating);
      default: return products;
    }
  }

  getFeatured(): Product[] { return this._products().slice(0, 8); }
  getNew(): Product[] { return this._products().filter(p => p.new).slice(0, 4); }
}