import React, { useState } from 'react'

function DrivedState() {
    // const users = [
    //     {name:'Alce', age:30},
    //     {name:'Ankit', age:40},
    //     {name:'Ron', age:15},
    //     {naem:'Yun', age:23}
    // ]

    const [users, setUsers] = useState([
        {name:'Alce', age:30},
        {name:'Ankit', age:40},
        {name:'Ron', age:15},
    ])

    const userCount = users.length;
    // const averageAge = users.reduce((acc, ele) => acc+ele.age, 0)/userCount;

  return (
    <>
    <h1>User List</h1>
    <ul>
        {users.map((ele, inx) => {
            return(
                <li>{ele.name} - {ele.age} years old.</li>
            )
        })}
    </ul>
    <h2>Total users: {userCount}</h2>
    <p>Age average: {users.reduce((acc, ele) => acc + ele.age, 0)/userCount}</p>
    </>
  )
}

export default DrivedState