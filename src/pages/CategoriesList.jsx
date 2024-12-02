import React, { useContext,  useState } from "react";
import categoriesContext from "../context/CategoriesContext";
import { useLocation } from "react-router-dom";

function CategoriesList() {
  const location = useLocation();
  const [genreName, setgenreName] = useState(location.state?.genreName);
  const { genresList, genresDetails, isFetching } = useContext(categoriesContext);

  if (isFetching) {
    return <div>Loading...</div>;
  }
  console.log();
console.log(genresList);
  return (
    <div className="text-white">
      {/* Geners List */}
      <div className="flex gap-4">
        {
          genresList.filter((list) => ![99, 10402, 9648, 10770, 37].includes(list.id))
          .map((item,index)=>{
           return(
              <button onClick={() => setgenreName(item.name)}>{item.name}</button>
           )
          })
        }
      </div>
      {/* Genres and Movies Card */}
      {genresList
        .filter((list) => ![99, 10402, 9648, 10770, 37].includes(list.id) && list.name === genreName)
        .map((genre,index) => (
          <div key={index}>
            <h2 className="text-lg font-bold mb-2">{genre.name}</h2>
            <div className="grid grid-cols-5">
              {genresDetails
                .filter((movie) => movie.genre_ids.includes(genre.id))
                .map((movie, index2) => (
                  <div key={index2} className="">
                    <img
                      className="rounded-lg"
                      src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                      alt={movie.title || "Movie"}
                    />
                    <h1>{movie.title}</h1>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default CategoriesList;