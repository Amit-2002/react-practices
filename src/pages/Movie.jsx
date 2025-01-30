import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Movie = () =>{
    const moviesData = useLoaderData();
    console.log(moviesData);
    return (
        <>
        <h1>Movie page</h1>
        {moviesData.Search.map((currMovie) => {
            return(
                <Card key={currMovie.imdbID} currMovie={currMovie}/>
            )
        })
        }
        </>

    )
}
export default Movie;