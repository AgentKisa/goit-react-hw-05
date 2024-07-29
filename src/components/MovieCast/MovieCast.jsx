import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailsCast } from "../../pages/Api";
import { Circles } from "react-loader-spinner";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    async function getCast() {
      try {
        const response = await fetchDetailsCast(movieId);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  if (!cast.length) {
    return <div>This movie has no cast</div>;
  }

  return (
    <ul className={css.castList}>
      {cast.map((item) => (
        <li key={item.id} className={css.castItem}>
          <img
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                : defaultImg
            }
            width={100}
            alt={item.name}
            className={css.castImage}
          />
          <div className={css.castDetails}>
            <p>Name: {item.name}</p>
            <p>Character: {item.job}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
