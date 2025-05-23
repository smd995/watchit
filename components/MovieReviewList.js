import formatDate from "@/lib/formatDate";
import styles from "./MovieReviewList.module.css";
import StarRating from "./StarRating";

const labels = {
  sex: {
    male: "남성",
    female: "여성",
  },
};

function MovieReview({ movieReview }) {
  return (
    <li className={styles.movieReview}>
      <div className={styles.date}>{formatDate(movieReview.createdAt)}</div>
      <div>{labels.sex[movieReview.sex]}</div>
      <div className={styles.age}>{movieReview.age}대</div>
      <StarRating value={movieReview.starRating} />
    </li>
  );
}

export default function MovieReviewList({ movieReviews }) {
  if (!movieReviews || movieReviews.length === 0) {
    return <div className={styles.empty}>아직 작성된 리뷰가 없습니다.</div>;
  }

  return (
    <ul className={styles.movieReviewList}>
      {movieReviews.map((movieReview) => (
        <MovieReview key={movieReview.id} movieReview={movieReview} />
      ))}
    </ul>
  );
}
