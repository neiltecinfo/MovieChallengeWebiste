import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addFavoriteMovies, addWatchlistMovies } from "../../Redux/TaskSlice";
import Header from "../../Components/Header";

function Home() {
  const [movies, setMovies] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const dispatch = useDispatch();
  const userName = JSON.parse(localStorage.getItem("user"));

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
    dispatch(addFavoriteMovies(selectedMovies));
  };

  const handleAddToWatchlist = () => {
    const selectedMovies = movies.filter((movie) => checkedItems[movie.id]);
    dispatch(addWatchlistMovies(selectedMovies));
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
                  {item.name || "N/A"}
                </td>
                <td className="text-center border-2 border-black p-3">
                  {item.type || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="fixed bottom-5 right-5 space-y-4">
          {/* <button
          className="w-full px-4 py-2 bg-red-600 text-white rounded-md"
          onClick={handleAddToWatchlist}
        >
          Add to Watchlist
        </button> */}
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
