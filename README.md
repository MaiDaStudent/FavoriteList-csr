# Korean Skincare Favorites – CSR Prototype

🔗 **Live demo:** [https://favorite-list-csr.vercel.app](https://favorite-list-csr.vercel.app)  
📦 **Source code:** [https://github.com/MaiDaStudent/FavoriteList-csr](https://github.com/MaiDaStudent/FavoriteList-csr)

This project is a **Client-Side Rendered (CSR)** prototype built with **React and Vite**, created to explore how CSR works in a real-world web application. The idea is simple but effective: a smooth, interactive webshop where users can explore a curated selection of Korean skincare products — and build their own personal list of favorites.

As users scroll through the product grid, they can add or remove items to their favorites with a single click. A dedicated page, Mine favoritter, displays all the selected items, where they can be individually removed or cleared all at once with a single action. Everything runs directly in the browser — no server needed after the page loads. It is a SPA (single page application) build to feel like a multi-page application.

The interface is styled with a soft, clean aesthetic inspired by the K-beauty world, using Bootstrap 5 and the elegant Poppins font to reinforce a calm and user-friendly design. The experience is enhanced with small but thoughtful touches:

The navigation bar highlights the current page

A “Back to top” button appears when needed

Favorites persist thanks to localStorage, even after the browser is closed or reloaded

Behind the scenes, the app uses React Router to handle navigation between pages without reloading — one of the core strengths of CSR. Everything the user sees is rendered in the browser, making the app feel fast, fluid, and responsive.

All functionality runs entirely in the browser without any backend or server-side rendering.

---

## ✨ Features

- Client-side routing with **React Router**
- Add/remove products to/from favorites
- Favorites stored in **localStorage**
- Responsive layout with **Bootstrap 5**
- Scroll-to-top button for enhanced UX
- Active state navigation highlighting
- Clean UI styled to reflect a **K-beauty aesthetic**
- Fully offline-friendly using local image and product data

---

## 📁 Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Poppins font](https://fonts.google.com/specimen/Poppins)

---

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/[your-username]/csr-prototype.git
cd csr-prototype
npm install
npm run dev