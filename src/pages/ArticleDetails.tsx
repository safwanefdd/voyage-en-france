import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../types';

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    // Simuler le chargement d'un article depuis une API
    const fetchArticle = async () => {
      // Remplacer par un vrai appel API dans une application réelle
      const mockArticle: Article = {
        id: Number(id),
        title: "Les merveilles cachées de la Provence",
        content: "La Provence, région du sud-est de la France, est un véritable joyau pour les amateurs de nature, d'histoire et de gastronomie. Des villages perchés aux champs de lavande ondulants, en passant par les marchés colorés et les vestiges romains, chaque coin de cette région offre une expérience unique.\n\nCommencez votre voyage par une visite du pittoresque village de Gordes, accroché à flanc de falaise. Ses ruelles étroites et ses maisons en pierre vous transporteront dans une autre époque. Non loin de là, l'abbaye de Sénanque, nichée dans un vallon, vous émerveillera avec ses champs de lavande qui l'entourent, créant un tableau digne des plus belles cartes postales.\n\nPoursuivez votre périple vers les ocres de Roussillon, où les falaises aux teintes flamboyantes créent un paysage surréaliste. Une promenade sur le sentier des ocres vous permettra d'admirer ces formations géologiques uniques.\n\nNe manquez pas de visiter Avignon, ville d'art et d'histoire, dominée par l'imposant Palais des Papes. Flânez sur le célèbre pont d'Avignon et perdez-vous dans les ruelles médiévales du centre historique.\n\nEnfin, terminez votre voyage par une escapade dans le parc naturel régional du Luberon. Entre collines verdoyantes, villages perchés et champs de vignes, vous découvrirez l'essence même de la Provence.\n\nLa Provence est une terre de contrastes et de beautés, où chaque visite révèle de nouveaux trésors. Que vous soyez amateur d'histoire, de nature ou de gastronomie, vous trouverez votre bonheur dans cette région enchanteresse du sud de la France.",
        imageUrl: "https://source.unsplash.com/800x600/?provence"
      };
      setArticle(mockArticle);
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="article-details">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <div className="article-content">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ArticleDetails;