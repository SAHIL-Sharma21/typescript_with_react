//making button 3 and usiing context here

import React from 'react'
import {useCounter} from '../context/Counter'

interface MyButton {
    text: string | number | boolean,
    onClick?: ()=> void,
    something?: boolean
}

const Button3: React.FC<MyButton> = () => {

    const context = useCounter();
    
    return (
        <>
            <div>
                <h2>value from context: {context?.count}</h2>
                <button onClick={() => context?.setCount(context.count + 1)}>Add value </button>
            </div>
        </>
    )
}

export default Button3;