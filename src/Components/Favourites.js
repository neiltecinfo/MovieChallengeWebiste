import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavoriteMovies } from "../Redux/TaskSlice";
import Header from "./Header";

function Favourites() {
  const favoriteMovies = useSelector((state) => state.tasks.favoriteMovies);
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});

  const handleRemove = () => {
    const selectedMovieIds = Object.keys(checkedItems).filter(
      (id) => checkedItems[id]
    );
    dispatch(removeFavoriteMovies(selectedMovieIds));
    setCheckedItems({}); // Reset the checked items after removal
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-col items-center h-screen p-5">
      <Header />
      <h2 className="mt-11 mb-5 text-2xl font-bold">Favourites</h2>
      <div className="flex flex-col w-full max-w-3xl">
        {favoriteMovies.length > 0 ? (
          <div className="overflow-auto mb-36">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-2 border-black p-3">Select</th>
                  <th className="border-2 border-black p-3">Name</th>
                  <th className="border-2 border-black p-3">Type</th>
                </tr>
              </thead>
              <tbody>
                {favoriteMovies.map((item, index) => (
                  <tr key={index}>
                    <td className="border-2 border-black p-3 text-center">
                      <input
                        type="checkbox"
                        checked={!!checkedItems[item.id]}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                    </td>
                    <td className="border-2 border-black p-3 text-center">
                      {item.name}
                    </td>
                    <td className="border-2 border-black p-3 text-center">
                      {item.type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="fixed bottom-5 right-5 px-2 py-2 bg-red-600 text-white rounded-md cursor-pointer"
              onClick={handleRemove}
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="text-center">No movies selected</div>
        )}
      </div>
    </div>
  );
}

export default Favourites;
