import React, { useEffect, useState, useContext} from "react";
import { assets } from "../assets/assets";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from "react-router-dom";
import CategoriesContext from '../Context/categories/CategoriesContext'

 function Categories() {
  const navigate = useNavigate()

  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const { genresList, genresDetails} = useContext(CategoriesContext);
  return (


    <div className="bg-black2 text-white pb-11 px-20 xl-max:px-10 sm-max:px-3 " >
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
        <Carousel responsive={responsive}  removeArrowOnDeviceType={["tablet", "mobile"]} className="mt-12">
          {/* Genres and Movies Card */}
          {genresList
            .filter((list) => ![99, 10402, 9648, 10770, 37].includes(list.id))
            .map((genre, index) => (
              <div
                className="bg-black3 border border-black5 px-3 py-4 rounded-xl mx-2"
                key={index}
                onClick={()=> navigate('/categoriesList') }
              >
                <div className="grid grid-cols-2 gap-2">
                  {genresDetails
                    .filter((movie) => movie.genre_ids.includes(genre.id))
                    .slice(0, 4)
                    .map((movie, index) => (
                      <div key={index} className="">
                          <img
                            className="rounded-lg"
                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} 
                            alt=""
                          />
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
        </Carousel>
      </div>
    </div>
  );
}

export default Categories;
