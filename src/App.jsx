import { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import ProductCard from './ProductCard.jsx';
import ScrollToTopButton from './ScrollToTopButton.jsx';
import products from './products.js';

function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (productId) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="text-center mb-5">Mine produkter</h1>

        {products.length === 0 ? (
          <p className="text-center">Indlæser produkter...</p>
        ) : (
          <div className="row g-4">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </div>

      <ScrollToTopButton />
    </>
  );
}

export default App;