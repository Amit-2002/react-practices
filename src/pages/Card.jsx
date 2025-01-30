
function Card({currMovie}) {
    const {Poster, imdbID} = currMovie;
  return (
    <>
        <div>Card component</div>
        <img src={Poster} alt="image" />
        <button>{imdbID}</button>
    </>

  )
}

export default Card