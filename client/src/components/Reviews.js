import React from "react";
import StarRating from "./StarRating";

const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-4 mb-2">
      {reviews.map((review) => {
        return (
          <div
            className="card border-secondary mb-3"
            style={{ maxWidth: "30%" }}
          >
            <div className="card-header">{review.name}</div>
            <div className="card-body text-secondary">
              <h5 className="card-title">
                <StarRating rating={review.rating} />
              </h5>
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
