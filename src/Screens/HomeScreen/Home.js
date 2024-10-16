import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addFavoriteMovies, addWatchlistMovies } from "../../Redux/TaskSlice";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";
// https://dev.to/esedev/how-to-pass-and-access-data-from-one-route-to-another-with-uselocation-usenavigate-usehistory-hooks-1g5m

function Home() {
  const [movies, setMovies] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const dispatch = useDispatch();
  const userName = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/157336/videos?api_key=5bc7f5159e062208692dcd27aaa15e6b"
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddToFav = () => {
    const selectedMovies = movies.filter((movie) => checkedItems[movie.id]);
    if(selectedMovies.length === 0){
      alert("No items selected. Please select an item to add to Favourites")
      return;
    }
    dispatch(addFavoriteMovies(selectedMovies));
    alert(selectedMovies.length + " movies have been added to Favourites")
  };

  const handleAddToWatchlist = () => {
    const selectedMovies = movies.filter((movie) => checkedItems[movie.id]);
    // alert(selectedMovies.length)
    if(selectedMovies.length === 0){
      alert("No items selected. Please select an item to add to Watchlist")
      return;
    }
    dispatch(addWatchlistMovies(selectedMovies));
    alert(selectedMovies.length + " movies have been added to Watchlist")
  };


  return (
    <div className=" p-5 flex flex-col justify-center items-center">
      <Header />
      <h2 className="mt-11 mb-5 text-2xl font-bold">Fetch Data From API</h2>
      <div>Welcome {userName.firstname}</div>
      <div className="flex flex-col ">
        <table className="w-full max-w-4xl justify-center items-center">
          <thead>
            <tr>
              <th className="text-center border-2 border-black p-3">Select</th>
              <th className="text-center border-2 border-black p-3">Name</th>
              <th className="text-center border-2 border-black p-3">Type</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((item, index) => (
              <tr key={index}>
                <td className="text-center border-2 border-black p-3">
                  <input
                    type="checkbox"
                    checked={!!checkedItems[item.id]}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td className="text-center border-2 border-black p-3">
                  <button type="button" onClick={() =>navigate("/details", { state: item})}>{item.name || "N/A"}</button>
                </td>
                <td className="text-center border-2 border-black p-3">
                  {item.type || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="fixed bottom-5 right-5 space-y-4">
          <button
            className="w-full px-4 py-2 bg-red-600 text-white rounded-md"
            onClick={handleAddToFav}
          >
            Add to Favourites
          </button>
        </div>

        <button
          className="fixed bottom-20 right-5 px-2 py-2 bg-red-600 text-white rounded-md cursor-pointer"
          onClick={handleAddToFav}
        >
          Add to Favourites
        </button>

        <button
          className="fixed bottom-5 right-5 px-2 py-2 bg-red-600 text-white rounded-md cursor-pointer"
          onClick={handleAddToWatchlist}
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  );
}

export default Home;
