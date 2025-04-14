import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MovieList from "@/components/MovieList";
import axios from "@/lib/axios";
import Header from "@/components/Header";
import Container from "@/components/Container";
import styles from "@/styles/Search.module.css";

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
      <Header />
      <Container page>
        <SearchForm initialValue={q} />
        <h2 className={styles.title}>
          <span className={styles.keyword}>{q}</span> 검색 결과
        </h2>
        <MovieList movies={movies} />
      </Container>
    </div>
  );
}
