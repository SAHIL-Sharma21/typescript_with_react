//making button components in tsx
import React from 'react'

//preffered way of passing the props we can use interface or create type
interface MyButton {
    text: string,
}

//React.FC is a functional component
// giving generics calss to our Button: React.FC
//one way to write code
// const Button: React.FC<MyButton> = (props) => {
//     return <button>{props.text}</button>
// }


//another way we can do like this
const Button: React.FC<MyButton> = ({text}) => {
    return <button>{text}</button>
}

export default Button;