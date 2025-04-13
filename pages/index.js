import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const res = await axios.get(`/movies`);
    const nextMovies = res.data.results;
    setMovies(nextMovies);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1>watchit</h1>
      <SearchForm />
      <MovieList movies={movies} />
    </>
  );
}
