import React from 'react';
import { useParams } from 'react-router-dom';

const articles = [
  { id: 1, title: 'React Basics', content: 'Hi letsss learn basics of reacttttt' },
  { id: 2, title: 'Advanced React', content: 'Advanceddd reacttttt' },
  { id: 3, title: 'React Router Deep Dive', content: 'Less learn react routerr deep diveee' }
];

function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <h2 className="text-center mt-4">Article not found</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{article.title}</h1>
          <p className="card-text">{article.content}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
