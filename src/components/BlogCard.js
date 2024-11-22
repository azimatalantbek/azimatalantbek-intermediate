import React from 'react';
import './BlogCard.css';

function BlogCard({ title, description, imageUrl }) {
  return (
    <div className="blog-card">
      <img src={imageUrl} alt="blog" className="blog-img" />
      <h3 className="blog-title">{title}</h3>
      <p className="blog-description">{description}</p>
    </div>
  );
}

export default BlogCard;
