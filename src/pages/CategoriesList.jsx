import React, { useContext, useState } from "react";
import categoriesContext from "../context/CategoriesContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

function CategoriesList() {
  const location = useLocation();
  const [genreName, setGenreName] = useState(location.state?.genreName);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // 5 items per row * 4 rows
  const { genresList, genresDetails, isFetching } = useContext(categoriesContext);
  const navigate = useNavigate()

  console.log(genresDetails);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  const filteredGenresList = genresList.filter(
    (list) => ![99, 10402, 9648, 10770, 37].includes(list.id)
  );

  const filteredMovies = genresDetails.filter(
    (movie) => genresList.some((genre) => genre.id === movie.genre_ids[0] && genre.name === genreName)
  );

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);

  const handlePageChange = (direction) => {
    scrollTo(0,0)
    setCurrentPage((prev) =>
      direction === "next"
        ? Math.min(prev + 1, totalPages)
        : Math.max(prev - 1, 1)
    );
  };

  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="text-white">
      {/* Genres List */}
      <div className="flex gap-4 mb-4">
        {filteredGenresList.map((item, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-gray-700 rounded-lg"
            onClick={() => {
              setGenreName(item.name);
              setCurrentPage(1); // Reset page when genre changes
            }}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Genres and Movies Card */}
      {filteredGenresList
        .filter((list) => list.name === genreName)
        .map((genre, index) => (
          <div key={index}>
            <h2 className="text-lg font-bold mb-2">{genre.name}</h2>
            <div className="grid grid-cols-5 gap-4">
              {paginatedMovies.map((movie, index2) => (
                <Link to={`/${movie.id}`} >
                <div key={index2}  className="p-2 bg-red-800 rounded-lg"> 
                  <img
                    className="rounded-lg"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title || "Movie"}
                  />
                  <h1 className="mt-2 text-sm font-bold">{movie.title}</h1>
                </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-4">
          <button
            className="px-4 py-2 bg-gray-700 rounded-lg"
            disabled={currentPage === 1}
            onClick={() => handlePageChange("prev")}
          >
            Previous
          </button>
          <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            className="px-4 py-2 bg-gray-700 rounded-lg"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange("next")}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default CategoriesList;
