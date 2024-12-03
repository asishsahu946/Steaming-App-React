import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function SearchList() {
    const location = useLocation();
    const [search, setGenreName] = useState(location.state?.search);
    const [movieList, setMovieList] = useState([])

    console.log(search);
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFjYzVlMWNkZTgzM2RmNzYzMDhlYjA5YjA1MjMyYyIsIm5iZiI6MTcyOTcwNzEwOS4xNDUsInN1YiI6IjY3MTkzYzY1NWQwZGU4OTA0MmQ4Y2NjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3iT07Rh4-YwsGl_gim7COtEGHfG2NAK8srhHhzTJDg'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
    .then(res => res.json())
      .then(response => {
        setMovieList(response.results);
        console.log(response.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [search]);

  return (
      <div className='text-white'>
        {
            movieList.map((item)=> {
                return(
                    <Link to={`/${item.id}`  } >
                    <div>
                        {
                            item.title
                        }
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                    </div>
        </Link>
                )
            })
        }
    </div>
  )
}

export default SearchList