import { useState } from "react"

function NameForm(){
    const [inputValue, setInputValue] = useState('');
    const [name, setName] = useState('');

    function handleSubmit(){
        event.preventDefault()
        // document.getElementById('displayName').innerHTML = `Hello ${inputValue}.!`
        setName(inputValue);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter name."  
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                />
                <button>Submit</button>
            </form>
            <p id="displayName">{name}</p>
        </>
    )
}
export default NameForm;