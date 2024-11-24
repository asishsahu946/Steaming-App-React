import React, { useEffect, useState } from 'react';

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
          console.log(data.results);
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
        <div>
          {/* Genres and Movies Card */}
          {genresList.map((genre) => (
            <div key={genre.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <h2>{genre.name}</h2>
              <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
                {genresDetails
                  .filter((movie) => movie.genre_ids.includes(genre.id))
                  .slice(0, 4)
                  .map((movie) => (
                    <div key={movie.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.title}
                        style={{ width: '150px', height: '100px', objectFit: 'cover' }}
                      />
                      
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
