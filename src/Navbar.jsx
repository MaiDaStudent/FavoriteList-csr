import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar bg-white shadow-sm px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand fw-bold">Skincare Shop</span>
        <div className="d-flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Alle produkter
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) => isActive ? 'nav-link active text-pink' : 'nav-link'}
          >
            Mine favoritter 🩷
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;