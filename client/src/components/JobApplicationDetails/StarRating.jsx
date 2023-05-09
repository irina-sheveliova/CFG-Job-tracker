import "./JobDetails.css";

const StarRating = ({ rating }) => {
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
