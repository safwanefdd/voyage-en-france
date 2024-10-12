import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Simuler le chargement des articles depuis une API
    const fetchArticles = async () => {
      // Remplacer par un vrai appel API dans une application réelle
      const mockArticles: Article[] = [
        { id: 1, title: "Les merveilles cachées de la Provence", excerpt: "Découvrez les villages perchés et les champs de lavande...", imageUrl: "https://source.unsplash.com/800x600/?provence" },
        { id: 2, title: "Bretagne : Entre terre et mer", excerpt: "Explorez les côtes sauvages et les forêts mystérieuses...", imageUrl: "https://source.unsplash.com/800x600/?brittany" },
        { id: 3, title: "Les trésors cachés des Alpes françaises", excerpt: "Des sommets enneigés aux lacs cristallins...", imageUrl: "https://source.unsplash.com/800x600/?french,alps" },
      ];
      setArticles(mockArticles);
    };

    fetchArticles();
  }, []);

  return (
    <div className="home">
      <h1>Bienvenue sur notre blog de voyages en France</h1>
      <div className="articles-grid">
        {articles.map((article) => (
          <article key={article.id} className="article-card">
            <img src={article.imageUrl} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <Link to={`/article/${article.id}`} className="read-more">Lire la suite</Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;