import React from "react";
import StarRating from "./StarRating";

const Reviews = () => {
  return (
    <div className="row row-cols-4 mb-2">
      <div className="card border-secondary mb-3" style={{ maxWidth: "30%" }}>
        <div className="card-header">Header</div>
        <div className="card-body text-secondary">
          <h5 className="card-title">
            <StarRating rating={3} />
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card border-secondary mb-3" style={{ maxWidth: "30%" }}>
        <div className="card-header">Header</div>
        <div className="card-body text-secondary">
          <h5 className="card-title">
            <StarRating />
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card border-secondary mb-3" style={{ maxWidth: "30%" }}>
        <div className="card-header">Header</div>
        <div className="card-body text-secondary">
          <h5 className="card-title">
            <StarRating />
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card border-secondary mb-3" style={{ maxWidth: "30%" }}>
        <div className="card-header">Header</div>
        <div className="card-body text-secondary">
          <h5 className="card-title">
            <StarRating />
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
