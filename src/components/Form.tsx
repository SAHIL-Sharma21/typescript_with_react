//here we are going to handle form in react using Typescript

import React, {useState} from 'react'

const MyForm: React.FC = () => {

    //useState is either string or undefined 
    const [name, setName] = useState<string | undefined>();

//ideallly we do something like this
// this is has implicity any type
// const handleNameChange = (e) => {}

//how to handle this in ts
// React.ChangeEvent is used as we are handling the input in onChange >>> change event jo hi woh input element ka hai.
const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    setName(e.target.value);
}

    return (
        <>
            <div>
                <input  onChange={handleNameChange} 
                type="text" placeholder='enter your name' 
                value={name}
                />

                <h2>{name}</h2>
            </div>
        </>
    )
}

export default MyForm;