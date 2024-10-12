import React, { useState, useEffect } from 'react';
import { Article } from '../types';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);

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

  // ... rest of the component remains the same
};

export default Admin;