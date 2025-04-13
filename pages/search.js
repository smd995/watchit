import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MovieList from "@/components/MovieList";
import axios from "@/lib/axios";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  async function getMovies() {
    const res = await axios.get(`/movies?q=${q}`);
    const nextMovies = res.data.results;
    setMovies(nextMovies);
  }

  useEffect(() => {
    getMovies(q);
  }, [q]);

  return (
    <div>
      <h1>watchit</h1>
      <SearchForm initialValue={q} />
      <h2>{q} 검색 결과</h2>
      <MovieList movies={movies} />
    </div>
  );
}
