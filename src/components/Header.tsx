import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <Compass size={32} />
          <span>Voyages en France</span>
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;