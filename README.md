# 🎮 MadaGaming

> La meilleure destination jeux vidéo à Madagascar — PS5, Xbox, Nintendo Switch, PC

![Angular](https://img.shields.io/badge/Angular-19.2-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 🎓 Contexte Académique

> **Examen Semestriel — UPEF**
> 3ème Année — Génie Logiciel & Base de Données
> Université Professionnelle d'Excellence Fianarantsoa 🇲🇬

Ce projet a été réalisé dans le cadre de l'examen semestriel de 3ème année,
filière **Génie Logiciel et Base de Données** à l'UPEF.
Il démontre la maîtrise du développement frontend moderne avec le framework **Angular 19**,
l'utilisation des **Signals** pour la gestion d'état, et l'architecture
**standalone components** sans NgModule.

---

## 📸 Aperçu

| Accueil | Boutique | Profil |
|---------|----------|--------|
| Hero section avec catalogue | Filtres par plateforme | Historique commandes |

---

## ✨ Fonctionnalités

- 🛍️ **Catalogue** de 16 jeux avec vraies pochettes
- 🔍 **Recherche** et filtres par plateforme, prix, note
- 🛒 **Panier** avec panneau latéral animé
- ❤️ **Wishlist** persistante
- 👤 **Authentification** — Inscription / Connexion / Profil
- 📦 **Historique des commandes**
- 💳 **Checkout** avec MVola, Airtel Money, Cash
- 📱 **Responsive** mobile & desktop

---

## 🏗️ Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| Angular | 19.2 | Framework principal |
| TypeScript | 5.7 | Langage |
| Angular Signals | built-in | Gestion d'état réactif |
| SCSS | — | Styles scopés par composant |
| LocalStorage | — | Persistance des données |

---

## 📁 Structure du Projet
src/app/
├── core/
│   ├── models/          # Product, User, CartItem, Order
│   ├── services/        # ProductService, CartService, AuthService,
│   │                    # WishlistService, ToastService
│   └── guards/          # authGuard (routes protégées)
├── shared/
│   ├── components/      # Navbar, CartPanel, ProductCard, Toast, Footer
│   └── pipes/           # MgPricePipe, StarsPipe
└── pages/
├── home/            # Page d'accueil
├── shop/            # Boutique + filtres
├── product-detail/  # Fiche produit
├── checkout/        # Passage de commande
├── auth/            # Login + Register
└── profile/         # Profil utilisateur + Historique


---

## 🚀 Installation & Lancement

### Prérequis
- Node.js 18+
- npm 9+
- Angular CLI 19

```bash
# Cloner le projet
git clone  https://github.com/FanambyNyAvo/madagaming-UPEF-.git
cd madagaming

# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve
```

Ouvre **http://localhost:4200** dans ton navigateur.

---

## 🔧 Commandes utiles

```bash
# Développement
ng serve

# Build production
ng build

# Build avec watch
ng build --watch
```

---

## 🔐 Authentification

L'authentification est simulée en local via **localStorage** — pas de backend requis.

| Action | Description |
|--------|-------------|
| Inscription | Création de compte stocké localement |
| Connexion | Vérification email + mot de passe |
| Session | Persistée jusqu'à déconnexion |
| Profil | Modification nom, téléphone |
| Commandes | Historique sauvegardé par utilisateur |

> ⚠️ Les données sont liées au navigateur. Vider le cache supprime les comptes.

---

## 🛒 Flux d'achat
Catalogue → Fiche produit → Panier → Connexion requise → Checkout → Confirmation

---

## 🇲🇬 À propos du projet

Conçu spécifiquement pour le marché malgache avec :
- Prix en **Ariary (Ar)**
- Paiement **MVola** et **Airtel Money**
- Livraison partout à **Madagascar**

---

## 📄 Licence

MIT © 2026 MadaGaming
