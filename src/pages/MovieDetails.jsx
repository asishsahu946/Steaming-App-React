
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFjYzVlMWNkZTgzM2RmNzYzMDhlYjA5YjA1MjMyYyIsIm5iZiI6MTcyOTcwNzEwOS4xNDUsInN1YiI6IjY3MTkzYzY1NWQwZGU4OTA0MmQ4Y2NjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3iT07Rh4-YwsGl_gim7COtEGHfG2NAK8srhHhzTJDg",
    },
  };

  useEffect(() => {
    // Fetch movie details
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((response) => {
        setMovie(response);
        console.log("Movie Details:", response);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch movie credits
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
      .then((res) => res.json())
      .then((response) => {
        setCast(response.cast);
        setCrew(response.crew);
        console.log("Movie Cast and Crew:", response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  //  Director nd Music Director from Crew
  const director = crew.find((person) => person.job === "Director");
  const musicDirector = crew.find((person) => person.job === "Original Music Composer");

  return (
    <div className=" text-white min-h-screen p-4">
      {/* Top Section */}
      <div className="relative mb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90 rounded-lg"></div>
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 p-4 text-center ">
          <h1 className="text-3xl font-bold mb-3">{movie.title}</h1>
          <p className=" text-gray3 max-w-2xl mb-6">{movie.tagline}</p>

          <div className="flex justify-center gap-4">
            <button
              className="bg-red2 text-white px-4 py-2 rounded-full text-base flex items-center gap-2 hover:bg-red-700 transition">
              <span className="material-icons">play_arrow</span>
              Play Now
            </button>

            <button
              className="bg-black3 text-white text-base flex items-center gap-2 p-3 rounded-2xl hover:text-yellow-600 transition">
              <span className="material-icons">add</span>
            </button>

            <button
              className="bg-black3 text-white text-base flex items-center gap-2 p-3 rounded-2xl hover:text-red-600 transition">
              <span className="material-icons">thumb_up</span>
            </button>

            <button
              className="bg-black3 text-white text-base flex items-center gap-2 p-3 rounded-2xl hover:text-blue-600 transition">
              <span className="material-icons">volume_up</span>
            </button>
          </div>

        </div>
      </div>


      {/* Description Section */}
      <div className="bg-black3 p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-300">{movie.overview}</p>
      </div>

      {/* Cast Section */}
      <div className="bg-black3 p-6 rounded-lg shadow-md mb-10">
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

     
      <div className="bg-black3 text-white p-6 rounded-lg shadow-md space-y-6">
        {/*Year */}
        <div>
          <h3 className="text-lg font-medium">Released Year</h3>
          <p className="text-gray-300 mt-1">{new Date(movie.release_date).getFullYear()}</p>
        </div>

        {/*Languages*/}
        <div>
          <h3 className="text-lg font-medium">Available Languages</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {movie.spoken_languages?.map((lang, index) => (
              <span
                key={index}
                className="bg-black2 px-3 py-1 text-sm rounded-full border border-gray-700"
              >
                {lang.english_name}
              </span>
            ))}
          </div>
        </div>

        {/*Ratings*/}
        <div>
          <h3 className="text-lg font-medium">Ratings</h3>
          <div className="mt-2 flex gap-4">
            <div className="mt-2 flex items-center">
              <div className="bg-black1  py-2 rounded-lg text-center shadow">
                <p className="font-semibold">IMDb</p>
                <p className="text-yellow-500 mt-1">{movie.vote_average?.toFixed(1)}</p>
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <div className="bg-black1  py-2 rounded-lg text-center shadow">
                <p className="font-semibold">Streamvibe</p>
                <p className="text-yellow-500 mt-1">{movie.vote_average?.toFixed(1)}</p>
              </div>
            </div>
          </div>

        </div>

        {/*Genres*/}
        <div>
          <h3 className="text-lg font-medium">Genres</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-black1 px-3 py-1 text-sm rounded-full border border-gray-700"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        {/*Director*/}
        {director && (
          <div className="bg-black1 p-4 rounded-lg">
            <h3 className="text-lg font-medium">Director</h3>
            <p className="text-gray-300 mt-1">{director.name}</p>
          </div>
        )}

        {/*Music Director*/}
        {musicDirector && (
          <div className="bg-black1 p-4 rounded-lg">
            <h3 className="text-lg font-medium">Music</h3>
            <p className="text-gray-300 mt-1">{musicDirector.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
