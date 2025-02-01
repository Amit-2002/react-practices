import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Movie = () =>{
    const moviesData = useLoaderData();
    const data = moviesData.data;
    // console.log(moviesData);
    return (
        <>
        <h1>Movie page</h1>

            {/* using fetch */}
        {/* {moviesData.Search.map((currMovie) => {
            return(
                <Card key={currMovie.imdbID} currMovie={currMovie}/>
            )
        })
        } */}


                {/* using axios */}
        {
            data.Search.map((curr) => {
                return <Card key={curr.imdbID} currMovie={curr} />
            })
        }
        
        </>

    )
}
export default Movie;