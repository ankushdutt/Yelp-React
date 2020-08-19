import React, { useContext, useEffect } from "react";
import Reviews from "../components/Reviews";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import AddReview from "../components/AddReview";

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <Reviews reviews={selectedRestaurant.reviews} />
          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;
