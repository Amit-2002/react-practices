import React from 'react'

export async function getMovieDetails({params}) {
    console.log(params);
    const id = params.movieID;
    try{
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=eda0d274`);
        const data = await response.json();
        return data; 
      }
      catch(err){
        console.log(err);
      }
}

