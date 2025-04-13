import Link from "next/link";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>
            <img src={movie.posterUrl} alt={movie.title} />
          </Link>
          <div>
            <h2>{movie.title}</h2>
            <div>
              {movie.date} ・ {movie.country}
            </div>
            <div>
              {movie.starRating}
              <span>{movie.starRating}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
