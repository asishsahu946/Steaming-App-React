import React, { useEffect, useState } from 'react';
import {assets} from '../assets/assets'

function Categories() {
  const [genresList, setGenresList] = useState([]); // List of genres
  const [genresDetails, setGenresDetails] = useState([]); // Movies by selected genre
  const [genresId, setGenresId] = useState('28'); // Default genre ID (Action in TMDB)
  const [isFetching, setIsFetching] = useState(true); // To track if data is being fetched

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFjYzVlMWNkZTgzM2RmNzYzMDhlYjA5YjA1MjMyYyIsIm5iZiI6MTczMjI5MzMwOS42MzYzNjM3LCJzdWIiOiI2NzE5M2M2NTVkMGRlODkwNDJkOGNjYzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.D8PuTAUcytmByfmtlnRTVnAjjMRnQm-FLgvFxF5dtYs',
    },
  };

  // Fetch genres list on component mount
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      .then((response) => response.json())
      .then((data) => {
        setGenresList(data.genres);
        console.log('genresList', data.genres);
      })
      .catch((error) => console.error('Error fetching genres:', error));
  }, []);

  // Fetch movies based on selected genre ID
  useEffect(() => {
    if (genresId) {
      setIsFetching(true);
      fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genresId}`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setGenresDetails(data.results);
          console.log('genresDetails', data.results);
        })
        .catch((error) => console.error('Error fetching genre details:', error))
        .finally(() => setIsFetching(false));
    }
  }, [genresId]);

  return (
    <div>
      <div>
        <div>
          <h1>Explore our wide variety of categories</h1>
          <p>
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        {/* /Problem Starts hear */}
        <div className='flex'>
          {/* Genres and Movies Card */}
          {genresList.map((genre) => (
            <div key={genre.id} >
              <div className='grid grid-cols-2' >
                {genresDetails
                  .filter((movie) => movie.genre_ids.includes(genre.id))
                  .slice(0, 4)
                  .map((movie) => (
                    <div key={movie.id} className=''>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} //i want if movie.backdrop_path not available then show 'not available'
                        alt=''
                        />
                    </div>
                  ))}
              </div>
              <h2>{genre.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
