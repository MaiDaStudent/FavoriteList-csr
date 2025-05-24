function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm h-100 border-0 rounded-4">
        <img
          src={product.thumbnail}
          className="card-img-top rounded-top-4"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text fw-semibold">{product.price} DKK</p>
          <button
            className={`btn w-100 mt-2 ${isFavorite ? 'btn-danger' : 'btn-outline-secondary'}`}
            onClick={() => onToggleFavorite(product.id)}
          >
            {isFavorite ? 'Fjern fra favoritter 💔' : 'Tilføj til favoritter 🩷'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;