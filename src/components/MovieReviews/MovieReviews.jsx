import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailsReviews } from "../../pages/Api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function getReview() {
      try {
        const response = await fetchDetailsReviews(movieId);
        console.log("raaaa", response);
        setReview(response);
      } catch (error) {
        console.log(error);
      }
    }
    getReview();
  }, [movieId]);

  if (!review) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ul>
        {review.map((item) => (
          <li key={item.id}>
            <div>
              <p>Author: {item.author}</p>
              <p>Content: {item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
