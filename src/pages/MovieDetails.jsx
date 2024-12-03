import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFjYzVlMWNkZTgzM2RmNzYzMDhlYjA5YjA1MjMyYyIsIm5iZiI6MTcyOTcwNzEwOS4xNDUsInN1YiI6IjY3MTkzYzY1NWQwZGU4OTA0MmQ4Y2NjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3iT07Rh4-YwsGl_gim7COtEGHfG2NAK8srhHhzTJDg'
        }
      };
      

      useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(res => res.json())
          .then(response => {
            setMovie(response);
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          });
      }, [id]);
 
  return (
    <div className='text-white'>{movie.title}</div>
  )
}

export default MovieDetails