import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const AddReview = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateRestaurant = await RestaurantFinder.post(`/${id}`, {
      name,
      review: reviewText,
      rating,
    });
  };

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            id="Review"
            className="form-control"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
