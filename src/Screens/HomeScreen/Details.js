import React from "react";
import Header from "../../Components/Header";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavoriteMovies } from "../../Redux/TaskSlice";
import { addWatchlistMovies } from "../../Redux/TaskSlice";

const Details = () => {
  const location = useLocation();
  const item = location.state;
  const dispatch = useDispatch();
  // const {item} = route.params;

  return (
    <div className="flex flex-col items-center h-screen p-5">
      <Header />
      <h2 className="mt-11 mb-5 text-2xl font-bold">Details</h2>

      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-center max-w-64 mb-5">
          <div className="mr-4">Name:</div>
          <div>{item.name}</div>
        </div>
        <div className="flex flex-row max-w-64 mb-5">
          <div className="mr-4">Key:</div>
          <div className="ml-5">{item.key}</div>
        </div>
        <div className="flex flex-row max-w-64 mb-5">
          <div className="mr-4">Site:</div>
          <div className="ml-5">{item.site}</div>
        </div>
        <div className="flex flex-row max-w-64 mb-5">
          <div className="mr-4">Size:</div>
          <div className="ml-5">{item.size}</div>
        </div>
      </div>

      <div>
        <button className="mb-6 border-2 p-2 mr-4" onClick={() => dispatch(addFavoriteMovies([item]))}>Add to Favourites</button>
        <button className="mb-6 border-2 p-2 mr-4" onClick={() => dispatch(addWatchlistMovies([item]))}>Add to Watchlist</button>
      </div>
    </div>
  );
};

export default Details;
