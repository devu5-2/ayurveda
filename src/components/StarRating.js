// components/StarRating.js
"use client";  
import { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="star"
          onClick={() => setRating(star)}
          style={{ cursor: 'pointer', fontSize: '2rem' }}
        >
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
