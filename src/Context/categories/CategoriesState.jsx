import { useEffect, useState } from "react";
import categoriesContext from "./CategoriesContext";

const CategoriesState = (props) => {
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
          // console.log("genresList", data.genres);
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
          // console.log("Fetched all pages:", allMovies);
        };
        fetchAllPages();
      }
    }, [genresId]);
  
    return (
        <categoriesContext.Provider 
            value={{
                genresList,
                genresDetails,
                genresId,
                isFetching
            }}
        >
            {props.children}
        </categoriesContext.Provider>
    );
};

export default CategoriesState;
