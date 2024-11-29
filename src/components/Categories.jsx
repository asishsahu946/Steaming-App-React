import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

function Categories() {
  const [genresList, setGenresList] = useState([]); // List of genres
  const [genresDetails, setGenresDetails] = useState([]); // Movies by selected genre
  const [genresId, setGenresId] = useState("28"); // Default genre ID (Action in TMDB)
  const [isFetching, setIsFetching] = useState(true); // To track if data is being fetched

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFjYzVlMWNkZTgzM2RmNzYzMDhlYjA5YjA1MjMyYyIsIm5iZiI6MTczMjI5MzMwOS42MzYzNjM3LCJzdWIiOiI2NzE5M2M2NTVkMGRlODkwNDJkOGNjYzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.D8PuTAUcytmByfmtlnRTVnAjjMRnQm-FLgvFxF5dtYs",
    },
  };

  // Fetch genres list on component mount
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((data) => {
        setGenresList(data.genres);
        console.log("genresList", data.genres);
      })
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  // Fetch movies for multiple pages based on selected genre ID
  useEffect(() => {
    if (genresId) {
      setIsFetching(true);
      const fetchAllPages = async () => {
        const allMovies = [];
        for (let page = 1; page <= 15; page++) {
          try {
            const response = await fetch(
              `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genresId}`,
              options
            );
            const data = await response.json();
            allMovies.push(...data.results);
          } catch (error) {
            console.error(`Error fetching page ${page}:`, error);
          }
        }
        setGenresDetails(allMovies);
        setIsFetching(false);
        console.log("Fetched all pages:", allMovies);
      };
      fetchAllPages();
    }
  }, [genresId]);

  return (
    <div className="bg-black2 text-white pb-11 px-20 xl-max:px-10 sm-max:px-3 ">
      <div>
        <div>
          <h1 className="font-semibold text-4xl xl-max:text-3xl sm-max:text-xl">
            Explore our wide variety of categories
          </h1>
          <p className="mt-5 text-lg xl-max:text-base sm-max:text-xs text-gray1">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="flex gap-2 pt-10">
          {/* Genres and Movies Card */}
          {genresList
            .filter((list) => ![99, 10402, 9648, 10770, 37].includes(list.id))
            .slice(0, 2)
            .map((genre, index) => (
              <div
                className="bg-black3 border border-black5 px-3 py-4 rounded-xl"
                key={index}
              >
                <div className="grid grid-cols-2 gap-2">
                  {genresDetails
                    .filter((movie) => movie.genre_ids.includes(genre.id))
                    .slice(0, 4)
                    .map((movie, index) => (
                      <div key={index} className="">
                        {movie.backdrop_path ? (
                          <img
                            className="rounded-lg"
                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                            alt=""
                          />
                        ) : (
                          <img src={assets.abstract} alt="" />
                        )}
                      </div>
                    ))}
                </div>
                <div className="flex justify-between px-1 mt-2">
                  <h2>{genre.name}</h2>
                  <button>
                    <img src={assets.rightbtn} alt="" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
