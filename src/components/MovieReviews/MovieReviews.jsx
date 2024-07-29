import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { fetchDetailsReviews } from "../../pages/Api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function getReview() {
      try {
        const response = await fetchDetailsReviews(movieId);
        setReview(response);
      } catch (error) {
        console.log(error);
      }
    }
    getReview();
  }, [movieId]);

  if (!review.length) {
    return <div>we don't have any reviews for this movies</div>;
  }

  return (
    <ul className={css.reviewList}>
      {review.map((item) => (
        <li key={item.id} className={css.reviewItem}>
          <p className={css.reviewAuthor}>Author: {item.author}</p>
          <p>Content: {item.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
