import { NavLink } from "react-router-dom";

function Card({currMovie}) {
    const {Poster, imdbID} = currMovie;
  return (
    <>
        <div>Card component</div>
        <img src={Poster} alt="image" />
        <NavLink to={`/movie/${imdbID}`}>
          <button>watch now</button>
        </NavLink>
    </>

  )
}

export default Card