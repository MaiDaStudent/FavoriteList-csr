import { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import ScrollToTopButton from './ScrollToTopButton.jsx';
import products from './products.js';

function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteIds(saved);
  }, []);

  useEffect(() => {
    const matchedProducts = products.filter(product =>
      favoriteIds.includes(product.id)
    );
    setFavoriteProducts(matchedProducts);
  }, [favoriteIds]);

  const removeFromFavorites = (idToRemove) => {
    const updated = favoriteIds.filter(id => id !== idToRemove);
    setFavoriteIds(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const clearFavorites = () => {
    setFavoriteIds([]);
    localStorage.removeItem('favorites');
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="text-center mb-4">Mine favoritter</h1>

        {favoriteIds.length > 0 && (
          <div className="text-center mb-4">
            <button className="btn btn-outline-danger" onClick={clearFavorites}>
              Ryd alle favoritter 🗑️
            </button>
          </div>
        )}

        {favoriteProducts.length === 0 ? (
          <p className="text-center">Du har ingen favoritter endnu.</p>
        ) : (
          <div className="row g-4">
            {favoriteProducts.map(prod => (
              <div className="col-md-4" key={prod.id}>
                <div className="card shadow-sm h-100 border-0 rounded-4">
                  <img
                    src={prod.thumbnail}
                    className="card-img-top rounded-top-4"
                    alt={prod.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{prod.title}</h5>
                    <p className="card-text fw-semibold">{prod.price} DKK</p>
                    <button
                      className="btn btn-danger w-100 mt-2"
                      onClick={() => removeFromFavorites(prod.id)}
                    >
                      Fjern fra favoritter 💔
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ScrollToTopButton />
    </>
  );
}

export default FavoritesPage;