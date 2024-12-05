// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// function MovieDetails() {
//     const { id } = useParams();
//     const [movie, setMovie] = useState({});
//     const [cast, setCaste] = useState([])

//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFjYzVlMWNkZTgzM2RmNzYzMDhlYjA5YjA1MjMyYyIsIm5iZiI6MTcyOTcwNzEwOS4xNDUsInN1YiI6IjY3MTkzYzY1NWQwZGU4OTA0MmQ4Y2NjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3iT07Rh4-YwsGl_gim7COtEGHfG2NAK8srhHhzTJDg'
//         }
//       };    

//       useEffect(() => {
//         fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
//         .then(res => res.json())
//           .then(response => {
//             setMovie(response);
//             console.log(response);
//           })
//           .catch(error => {
//             console.error(error);
//           });
//       }, [id]);

//       useEffect(() => {
//         fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
//         .then(res => res.json())
//           .then(response => {
//             setCaste(response.cast);
//             console.log(response.cast);
//           })
//           .catch(error => {
//             console.error(error);
//           });
//       }, [id]);
 
//   return (
//     <div className='text-white'>
//       {/* Top section */}
//       <div>   
//       <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//       </div>
//       {/* description */}
//       <div>
//         <p>{movie.overview}</p>
//       </div>
//       {/* cast image section */}
//       <div className='flex '>
//         {
//           cast.map((item,index) => {
//             return(
//               <div className='w-20'>
//                 <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt="" />
//               </div>
//             )
//           })
//         }
//       </div>
//       {/* buttom container */}
//       <div>
//         <h1>{movie.release_date}</h1>
//         <h1>{movie.vote_average}</h1>
//         <ul>
//   {movie.genres && movie.genres.map((genre, index) => (
//     <li key={index}>{genre.name}</li>
//   ))}
// </ul>
//       </div>
//     </div>
//   )
// }

// export default MovieDetails

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer YOUR_API_KEY", // Replace with your TMDB API Key
    },
  };

  // Fetch movie details
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, [id]);

  // Fetch cast details
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
      .then((res) => res.json())
      .then((data) => setCast(data.cast || []))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      {/* Top Section */}
      <div className="relative mb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
        />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90 rounded-lg"></div>

<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4">
  <h1 className="text-5xl font-bold mb-3">{movie.title}</h1>
  <p className="text-lg text-gray-300 max-w-2xl mb-6">{movie.tagline}</p>
  <div className="flex gap-4">
    <button className="bg-red-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-red-700">
      Play Now
    </button>
    <button className="bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700">
      Add to Watchlist
    </button>
    <button className="bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700">
      Share
    </button>
  </div>
</div>
      </div>

      {/* Description Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-300">{movie.overview}</p>
      </div>

      {/* Cast Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Cast</h2>
        <div className="flex overflow-x-auto space-x-4">
          {cast.slice(0, 10).map((actor) => (
            <div key={actor.id} className="flex-shrink-0 text-center w-24">
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className="w-full h-32 rounded-lg object-cover"
              />
              <p className="mt-2 text-sm text-gray-300">{actor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
