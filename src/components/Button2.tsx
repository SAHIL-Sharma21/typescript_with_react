// here we are going to learn types in useState in react app

import React, {useState} from 'react'

interface MyButton {
    text: string | boolean | number,
    onClick?: () => void,
    isClickable?: boolean,

}

//making aniother interface so that we can give inrterface type in useState.
interface Book {
    name: string,
    price: number
}

const Button2: React.FC<MyButton> = ({text, onClick, isClickable}) => {

    // const [value, setValue] = useState(1); // this is called implicit casting
    //initially we define like this in js
    //how we can do in ts we will study

    //soluttion to dio this in ts we also called this explicit casting
    const [value, setValue] = useState<number>(1); //the useState is accpet number and only the number will increment typecheck done
    const [strValue, setStrValue] = useState<string>('a');
    
    // using Book as a type as Book is object so we are setting default notes as object
    const [notes, setNotesd] = useState<Book>({
        name: 'Javacript notes',
        price: 4500
    });


    return (
        <>
            <h3>{value}</h3>
            <button onClick={() => setValue(value + 1)}>{text} : {value} {isClickable}</button>

            <h4>{strValue}</h4>
            <button onClick={() => setStrValue('b')}>{text} : {strValue}</button>

            <h3>{notes.name}</h3>
        </>
    )
}

export default Button2;