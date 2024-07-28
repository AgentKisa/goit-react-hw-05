import axios from "axios";

export const fetchMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2Y1Njg4ZDVlN2RkNTc2ZGQ4NzdlN2NkNDVjZDg3OSIsIm5iZiI6MTcyMjEwMzI1OC44NDgzMzUsInN1YiI6IjY2YTUzNDRlMWM3YTJjODNlODllYzFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dDAJl1I4zncoiDYKcCvSPz2LqXoJNhkm1SiBKakE57g",
      },
    }
  );
  console.log("hhh", response.data.results);
  return response.data.results;
};

export const fetchSearchMovies = async (query) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query: query,
        include_adult: "false",
        language: "en-US",
        page: "1",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2Y1Njg4ZDVlN2RkNTc2ZGQ4NzdlN2NkNDVjZDg3OSIsIm5iZiI6MTcyMjEwMzI1OC44NDgzMzUsInN1YiI6IjY2YTUzNDRlMWM3YTJjODNlODllYzFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dDAJl1I4zncoiDYKcCvSPz2LqXoJNhkm1SiBKakE57g",
      },
    }
  );
  console.log("sear", response.data.results);
  return response.data.results;
};

export const fetchDetailsMovies = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2Y1Njg4ZDVlN2RkNTc2ZGQ4NzdlN2NkNDVjZDg3OSIsIm5iZiI6MTcyMjEwMzI1OC44NDgzMzUsInN1YiI6IjY2YTUzNDRlMWM3YTJjODNlODllYzFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dDAJl1I4zncoiDYKcCvSPz2LqXoJNhkm1SiBKakE57g",
      },
    }
  );
  console.log("detal", response.data);
  return response.data;
};

export const fetchDetailsCast = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2Y1Njg4ZDVlN2RkNTc2ZGQ4NzdlN2NkNDVjZDg3OSIsIm5iZiI6MTcyMjEwMzI1OC44NDgzMzUsInN1YiI6IjY2YTUzNDRlMWM3YTJjODNlODllYzFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dDAJl1I4zncoiDYKcCvSPz2LqXoJNhkm1SiBKakE57g",
      },
    }
  );
  console.log("cast", response.data.crew);
  return response.data.crew;
};

export const fetchDetailsReviews = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2Y1Njg4ZDVlN2RkNTc2ZGQ4NzdlN2NkNDVjZDg3OSIsIm5iZiI6MTcyMjEwMzI1OC44NDgzMzUsInN1YiI6IjY2YTUzNDRlMWM3YTJjODNlODllYzFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dDAJl1I4zncoiDYKcCvSPz2LqXoJNhkm1SiBKakE57g",
      },
    }
  );
  console.log("revis", response.data.results);
  return response.data.results;
};
