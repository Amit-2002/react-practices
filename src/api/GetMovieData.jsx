
async function GetMovieData() {
    try{
      const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=eda0d274&s=titanic&page=1');
      const data = await response.json();
      return data; 
    }
    catch(err){
      console.log(err);
    }
  }
  
  export default GetMovieData