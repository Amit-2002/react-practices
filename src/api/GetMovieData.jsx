import axios from "axios";

async function GetMovieData() {

                // using fetch
    // try{
    //   const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=eda0d274&s=titanic&page=1');
    //   const data = await response.json();
    //   return data;
    // }
    // catch(err){
    //   console.log(err);
    // }


                // using axios
    try {
      const data = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=eda0d274&s=titanic&page=1");
      return data;
    } catch (error) {
      console.log(err);
    }


  }
  
  export default GetMovieData