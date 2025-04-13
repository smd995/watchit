import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import MovieReviewList from "@/components/MovieReviewList";

export default function Movie() {
  const [movie, setMovie] = useState();
  const [movieReviews, setMovieReviews] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  async function getMovies(targetId) {
    const res = await axios.get(`/movies/${targetId}`);
    const nextMovie = res.data;
    setMovie(nextMovie);
  }

  async function getMovieReviews(targetId) {
    const res = await axios.get(`/movie_reviews/?movie_id=${targetId}`);
    const nextMovieReviews = res.data.results ?? [];
    setMovieReviews(nextMovieReviews);
  }

  useEffect(() => {
    if (!id) return;

    getMovies(id);
    getMovieReviews(id);
  }, [id]);

  if (!movie) return null;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.name} />
      <MovieReviewList movieReviews={movieReviews} />
    </div>
  );
}
