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
import React from 'react'
import { useState } from 'react';

function App() {
  return (
    <UserProfile/>
  )
}

export default App





function UserProfile(props){
    // let userBio = 'I am a developer';
    // const [bio, setBio] = useState(true);

    function handleBtnText(){
        setBio((pre) => !pre)
    }


     
    
    return(
        <>
        <h3>Name: {props.name}</h3>
        <p>Age: {props.age}</p>
        <p>Bio: {bio ? userBio : ''}</p>
        <button onClick={handleBtnText}>{bio ? 'Hide':'Show'}</button>
        </>
    )
}