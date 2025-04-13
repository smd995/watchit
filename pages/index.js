import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Header from "@/components/Header";
import Container from "@/components/Container";

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
      <Header />
      <Container page>
        <SearchForm />
        <MovieList movies={movies} />
      </Container>
    </>
  );
}
