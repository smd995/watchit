import { describe, test, expect } from "vitest";
import {
  getAllMovieReviews,
  getMovie,
  getMovieReviews,
  getMovies,
  getSearchMovie,
} from "./movieApi";
import { moviesData } from "../../test/moviesData";
import { movieReviewsData } from "../../test/movieReviewsData";

describe("Movie api test", () => {
  test("getMovie", async () => {
    const targetId = 1;
    const data = await getMovie(targetId);
    const expected = moviesData.results[8];
    expect(data).toEqual(expected);
  });

  test("getMovies", async () => {
    const data = await getMovies();
    const expected = moviesData;
    expect(data).toEqual(expected);
  });

  test("search", async () => {
    const q = "괴물";
    const data = await getSearchMovie(q);
    const expected = moviesData.results.filter((movie) => movie.title === q);
    expect(data.results).toEqual(expected);
  });

  test("getMovieReviews", async () => {
    const movieId = 1;
    const data = await getMovieReviews(movieId);
    const expected = movieReviewsData.results;
    expect(data.results).toEqual(expected);
  });

  test("getAllMovieReviews", async () => {
    const data = await getAllMovieReviews();
    const expected = movieReviewsData;
    expect(data).toEqual(expected);
  });
});
