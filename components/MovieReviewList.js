const { default: formatDate } = require("@/lib/formatDate");

const labels = {
  sex: {
    male: "남성",
    female: "여성",
  },
};

function MovieReview({ movieReview }) {
  return (
    <li>
      <div>{formatDate(movieReview.createdAt)}</div>
      <div>{labels.sex[movieReview.sex]}</div>
      <div>{movieReview.age}대</div>
      <div>{movieReview.starRating}</div>
    </li>
  );
}

export default function MovieReviewList({ movieReviews }) {
  if (!movieReviews || movieReviews.length === 0) {
    return <div>아직 작성된 리뷰가 없습니다.</div>;
  }

  return (
    <ul>
      {movieReviews.map((movieReview) => (
        <MovieReview key={movieReview.id} movieReview={movieReview} />
      ))}
    </ul>
  );
}
