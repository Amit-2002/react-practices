import React from 'react'
import { useLoaderData } from 'react-router-dom'

function MovieDetails() {
    const movieData = useLoaderData();
    console.log(movieData);

    const {Poster, Title} = movieData;

  return (
    <>
        <h1>Movie Details</h1>
        <img src={Poster} alt="kasldfj" /> <br />
        <h3>{Title}</h3>
    </>
  )
}

export default MovieDetails