import React, { useContext } from "react";
import categoriesContext from "../context/CategoriesContext";
import { useLocation } from "react-router-dom";

function CategoriesList() {
  const location = useLocation();
  const genreName = location.state?.genreName;
  const { genresList, genresDetails, isFetching } = useContext(categoriesContext);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white">
      {/* Genres and Movies Card */}
      {genresList
        .filter((list) => ![99, 10402, 9648, 10770, 37].includes(list.id) && list.name === genreName)
        .map((genre,index) => (
          <div key={index}>
            <h2 className="text-lg font-bold mb-2">{genre.name}</h2>
            <div className="">
              {genresDetails
                .filter((movie) => movie.genre_ids.includes(genre.id))
                .map((movie, index2) => (
                  <div key={index2} className="">
                    <img
                      className="rounded-lg"
                      src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                      alt={movie.title || "Movie"}
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