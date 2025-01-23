// import React from 'react'
import { useState } from 'react'
import './ToggleButton.css'

function ToggleButton() {
    const[text, setText] = useState(false);
    const handleOnClick = () =>{
        setText(!text);
    }

  return (
    <div className='switch-box' onClick={handleOnClick} style={{backgroundColor : text ? 'green' : 'red'}}>
        <div className={`switch ${text ? 'on' : 'off'}`}>
            <span>{text ? 'on' : 'off'}</span>
        </div>
    </div>
  )
}

export default ToggleButton