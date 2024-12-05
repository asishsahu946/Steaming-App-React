import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Upcoming() {
 
const [data, setData] = useState([])
const [isFetching, setIsFetching] = useState(true); // To track if data is being fetched

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFjYzVlMWNkZTgzM2RmNzYzMDhlYjA5YjA1MjMyYyIsIm5iZiI6MTcyOTcwNzEwOS4xNDUsInN1YiI6IjY3MTkzYzY1NWQwZGU4OTA0MmQ4Y2NjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3iT07Rh4-YwsGl_gim7COtEGHfG2NAK8srhHhzTJDg'
  }
};

  useEffect(()=> {
    if (isFetching) {
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => {
      setData(res.results)
      console.log(res.results);
      setIsFetching(false); // Mark fetching as complete
    })
    .catch(err => console.error(err))
  }
  }, [isFetching]);

  return (
    <div>
      <div>Upcoming</div>
      <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
        {
          data.map((item,index) => {
            return(
              <Link to={`/${item.id}`} >
              <div>
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                <h1>{item.title}</h1>
              </div>
              </Link>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Upcoming