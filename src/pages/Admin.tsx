import React, { useState, useEffect } from "react";
import { Article } from "../types";
import articlesData from "../db/articles.json"; // Renommé pour éviter les conflits avec l'état

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setArticles(articlesData);
    };

    fetchArticles();
  }, []);
  return (
    <div className="admin-panel">
      {!isAuthenticated ? (
        <div className="admin-login">
          <h2>Admin Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (password === "admin") {
                setIsAuthenticated(true);
              } else {
                alert("Mot de passe incorrect");
              }
            }}
          >
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Se connecter</button>
          </form>
        </div>
      ) : (
        <div className="articles-list">
          <h2>Articles</h2>
          {articles.map((article) => (
            <div key={article.id} className="article-item">
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <button onClick={() => setEditingArticle(article)}>
                Modifier
              </button>
              <button
                onClick={async () => {
                  const response = await fetch(`/api/articles/${article.id}`, {
                    method: "DELETE",
                  });

                  if (response.ok) {
                    setArticles(articles.filter((a) => a.id !== article.id));
                  } else {
                    alert("Erreur lors de la suppression de l'article");
                  }
                }}
              >
                Supprimer
              </button>
            </div>
          ))}
          {editingArticle && (
            <div className="edit-form">
              <h2>Modifier l'article</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setArticles(
                    articles.map((a) =>
                      a.id === editingArticle.id ? editingArticle : a
                    )
                  );
                  setEditingArticle(null);
                }}
              >
                <input
                  type="text"
                  value={editingArticle.title}
                  onChange={(e) =>
                    setEditingArticle({
                      ...editingArticle,
                      title: e.target.value,
                    })
                  }
                />
                <textarea
                  value={editingArticle.excerpt}
                  onChange={(e) =>
                    setEditingArticle({
                      ...editingArticle,
                      excerpt: e.target.value,
                    })
                  }
                />
                <button type="submit">Enregistrer</button>
                <button type="button" onClick={() => setEditingArticle(null)}>
                  Annuler
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
