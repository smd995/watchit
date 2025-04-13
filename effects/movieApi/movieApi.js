import axios from "../../lib/axios";

export const getMovie = async (targetId) => {
  const res = await axios.get(`/movies/${targetId}`);
  const data = res.data;
  return data;
};

export const getMovies = async () => {
  const res = await axios.get(`/movies`);
  const data = res.data;
  return data;
};

export const getSearchMovie = async (q) => {
  const res = await axios.get(`/movies/?q=${q}`);
  const data = res.data;
  return data;
};

export const getAllMovieReviews = async () => {
  const res = await axios.get(`/movie_reviews`);
  const data = res.data;
  return data;
};

export const getMovieReviews = async (movieId) => {
  const res = await axios.get(`/movie_reviews/?movie_id=${movieId}`);
  const data = res.data;
  return data;
};
