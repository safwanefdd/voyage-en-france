import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Article } from "../types";
import articlesData from "../db/articles.json";

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const mockArticle = articlesData.find(
        (article) => article.id === parseInt(id!)
      );
      if (mockArticle) {
        setArticle(mockArticle);
      } else {
        setArticle(null);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="article-details">
      <h1>{article.title}</h1>
      <img
        src={article.imageUrl}
        alt={article.title}
        className="article-image"
      />
      <div className="article-content">
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
