import "./JobDetails.css";

import React from "react";

const StarRating = () => {
  const getRandomRating = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  const rating = getRandomRating();

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="fas fa-star checked"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star"></i>);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
