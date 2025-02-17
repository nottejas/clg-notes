import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  { id: 1, title: 'React Basics' },
  { id: 2, title: 'Advanced React' },
  { id: 3, title: 'React Router Deep Dive' }
];

function ArticleList() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Articles</h1>
      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <Link to={`/article/${article.id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
