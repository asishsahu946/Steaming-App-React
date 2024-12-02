import React, { useContext } from "react";
import categoriesContext from "../context/CategoriesContext";

function CategoriesList() {
  const { genresList, genresDetails, genresId, setGenresId, isFetching } =
    useContext(categoriesContext);
  console.log(genresList);
  console.log(genresDetails);
  return (
    <div className="text-white">
      {/* Genres and Movies Card */}
      {genresList
        .filter((list) => ![99, 10402, 9648, 10770, 37].includes(list.id))
        .map((genre, index) => (
          <div
            className="bg-black3 border border-black5 px-3 py-4 rounded-xl mx-2"
            key={index}
          >
            <div className="grid grid-cols-2 gap-2">
              {genresDetails
                .filter((movie) => movie.genre_ids.includes(genre.id))
                .slice(0, 4)
                .map((movie, index) => (
                  <div key={index} className="">
                    <img
                      className="rounded-lg"
                      src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default CategoriesList;
