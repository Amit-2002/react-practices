// function Profile() {
//   return (
//     <div>
//         <h1>Profile Card challenge</h1>
//         <ProfileCard
//         name='Amit'
//         age='22'
//         greeting={<div><strong>Hi, Amit have a wonderful day..!</strong></div>}
//         />
//         <p>Hobbies: Gaming, Cooking</p>
//         <button>Contact me</button>
//     </div>
//   )
// }



// import ToggleButton from "./project/ToggleButton"

// export default Profile

// function ProfileCard({name, age, greeting, child}){

//     return(
//         <>
//             <h2>Name: {name}</h2>
//             <p>Age: {age}</p>
//             <p>Greeting: {greeting}</p>
//             <div>{child}</div>
//         </>
//     )
// }

// import React from 'react'
// // import { LifttingStateUp } from './components/LifttingStateUp'
// // import DrivedState from './components/DrivedState'

// function App() {
//   return (
//     <>
//     {/* <DrivedState/> */}

//     <LifttingStateUp />
//     </>
//   )
// }

// export default App

// const App = () => {
//   return(<>
//     <h1>hii this is amit</h1>
//     <ToggleButton/>
//   </>)
// }
// export default App
// dynamic color selector

// import React, { useState } from 'react'
// // import NameForm from './components/NameForm'
// // import Counter from './components/Counter'

// function App() {
//   return (
//     <ColorApp />
//   )
// }

// export default App

// function ColorApp(){
//   const [color, setColor] = useState('black')
//   return(
//     <div>
//       <ColorSelector selectedColor={setColor}/>
//       <ColorDisplay displayCol={color}/>
//     </div>
//   )
// }

// const ColorSelector = ({selectedColor}) => {
//   return(
//       <div>
//         <button onClick={() => selectedColor('red')}>Red</button>
//         <button onClick={() => selectedColor('green')}>Green</button>
//         <button onClick={() => selectedColor('blue')}>Blue</button>
//       </div>
//     )
// }

// const ColorDisplay = ({displayCol}) => {
//   return(
//     <div style={{height:'500px', width:'500px', margin: '10px auto', backgroundColor: displayCol }}></div>
//   )
// }






      


//                                                     // Dynamic font size Adjuster
// import React, { useState } from "react";

// function App() {
//   return (
//     <>
//       <FontSizeApp />
//     </>
//   );
// }

// export default App;

// function FontSizeApp() {
//   const [size, setSize] = useState(12);

//   return (
//     <>
//       <FontSizeControl fontSize={size} setFontSize={setSize}/>
//       <TextDisplay displaySize={size}/>
//     </>
//   );
// }

// const FontSizeControl = ({fontSize, setFontSize}) => {
//   return (
//     <>
//       <label htmlFor="slider">Adjust font Size:</label>
//       <input 
//       name="slider"
//       type="range"
//       min='10'
//       max='50'
//       value={fontSize}
//       onChange={(event) => setFontSize(event.targe
// };

// const TextDisplay = ({displaySize}) => {
//   return <p style={{fontSize:`${displaySize}px`}}>It will look like this..!</p>;
// };








                                                                // Simple comment poster
// import React, { useState } from 'react'

// function App() {
//   return (
//     <CommentApp />
//   )
// }

// export default App

// function CommentApp(){
//     const [commentsList, setCommentLists] = useState([]);

//     function addComment(newComment){
//         setCommentLists([...commentsList, newComment])
//         // console.log(commentsList);  
//     }

//     return(
//         <>
//         <CommentInput onAddComment={addComment}/>
//         <CommentsList comments={commentsList}/>
//         </>
//     )
// }

// const CommentInput = ({onAddComment}) =>{
//     const [comment, setComment] = useState('');
//     function handleSubmit(){
//         event.preventDefault();
//         onAddComment(comment);
//         setComment('');
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder='Comment.' value={comment} onChange={(event) => setComment(event.target.value)}/>
//             <button>Submit</button>
//         </form>
//     )
// }


// const CommentsList = ({comments}) => {
//     return(
//         <ul>
//             {comments.map((comment) => {
//                 return(
//                     <li>{comment}</li>
//                 )
//             })}
//         </ul>
//     )
// }





                                                // user profile
// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// // import { useState } from 'react';

// function App() {
//   return (
//     <UserProfile/>
//   )
// }

// export default App





// function UserProfile(){
//     const [apiData, setData] = useState(null) 
//     const [bio, setBio] = useState(true)

//     const fetchData = async () => {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         let data = await response.json();
//         setData(data);
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])

//     console.log(apiData);

//     function handleClick(){
//         setBio((prev) => !prev);
//     }
     
    
//     if(apiData){
//         return(
//             <>
//             <h3>Name: {apiData.name}</h3>
//             <p>Age: {apiData.id}</p>
//             <p>Bio: {bio ? apiData.company.catchPhrase : ''}</p>

//             <button onClick={handleClick}>
//                 {bio ? 'Hide' : 'Show'}
//             </button>
//             </>
//         )
//     }
// }





// let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid='+key; 

// let key = 'f6e86befef45e6fa6779828ca8f7442a';
// const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + key;   
// (async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// })()

                                                           // wether data
// import React, { useEffect, useState } from 'react'

// function App() {
//   return (
//    <>
//     <h1>Weather App</h1>
//     < WeatherDisplay location='agra'/>
//    </>
//   )
// }

// export default App


// function WeatherDisplay(props){
//   const [apiData, setData] = useState(null);
//   const key = 'f6e86befef45e6fa6779828ca8f7442a';
//   const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + key + '&q=' + props.location; 

//   const getData = async() =>{
//     const response = await fetch(url);
//     const data = await response.json();
//     setData(data); 
//   }

//   useEffect(() => {
//     getData();
//   }, [])
  
//   if (apiData){
//     return(
//       <>
//         <p>Location: {apiData.name}</p>
//         <p>Temperature: {Math.floor(apiData.main.temp)}<sup>o</sup></p>
//         <p>Condition: {apiData.weather[0].description}</p>
//       </>
//     )
//   }
  
// }











                                                            // book review

// function App() {
//     const [bookData, setData] = React.useState(null);
    
//     async function getData(){
//       let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       let data = await response.json();
//       setData(data);
//     }
    
//     React.useEffect(() => {
//       getData();
//     },[])
  
//     if (bookData){
//       return(
//         bookData.map((book) => {
//         return (
//           <BookReview title={book.title}
//           author={book.id}
//           rating={book.userId}
//           review={book.body}
//           />
//         );
//       })
//         )
//     }
   
//   }
  
//   function BookReview({title, author, rating, review}){
//     return(
//       <div>
//         <h1>Book Review</h1>
//         <h3>Title: {title}</h3>
//         <strong><i>Author: {author}</i></strong>
//         <p>Review: {review}</p>
//         <span>Rating: {rating}</span>
//       </div>
      
//     )
//   }
//   const rootElement = document.getElementById('root');
//   ReactDOM.render(<App />, rootElement);
  











// import {useNavigate, BrowserRouter} from 'react-router-dom'


// const App = () => {

//     // const err = useRouteError()
//     return (
//         <BrowserRouter>
//             <>
//             <h1>UseRoutError</h1>
//             <a />
//             </>
//         </BrowserRouter>
//     )
// }

// export default App
    

// function a (){
//     const nav = useNavigate();
//     console.log(nav);
//     return(
//         <h3>ldfkas</h3>
//     )
// }






            // gpt code 

// import { useNavigate, useRouteError, BrowserRouter } from 'react-router-dom';

// const App = () => {
//     const err = useRouteError(); // Uncommented and ready to use
//     return (
//         <BrowserRouter>
//             <>
//                 <h1>UseRouteError</h1>
//                 {err && <p>Error: {err.message}</p>}
//                 <MyComponent />
//             </>
//         </BrowserRouter>
//     );
// };

// const MyComponent = () => {
//     const nav = useNavigate();

//     const handleNavigate = () => {
//         nav('/some-path'); // Example navigation
//     };

//     return (
//         <div>
//             <h3>Navigation Example</h3>
//             <button onClick={handleNavigate}>Go to Some Path</button>
//         </div>
//     );
// };

// export default App;








                        // BASIC ROUTS 

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Movie from "./pages/Movie";
// import Contacts from "./pages/Contacts";
// import GetMovieData from "./api/GetMovieData";

// const App = () => {
//     const router = createBrowserRouter([
//         {
//             path:'/',
//             element: <Home />
//         },
//         {
//             path:'/about',
//             element: <About />
//         },
//         {
//             path:'/movie',
//             element: <Movie />,
//             loader: GetMovieData
//         },
//         {
//             path:'/contacts',
//             element: <Contacts />
//         }
//     ]);


//     return(
//        <>
//          <h1>React Router</h1>
//          <RouterProvider router={router}/>
//        </>
//     )
// }
// export default App;





                            // router app layout
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout Components/AppLayout';
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from './pages/Movie';
import Contacts from './pages/Contacts';
import GetMovieData from './api/GetMovieData';


function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/movie',
                    element: <Movie />,
                    loader: GetMovieData
                },
                {
                    path: '/contacts',
                    element: <Contacts />
                }
            ]
        }
        
    ])



  return (
    <>
        <div>App</div>
        <RouterProvider router={router}/>
    </>
  )
}

export default App;