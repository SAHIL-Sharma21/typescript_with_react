//making button components in tsx
import React from 'react'

//preffered way of passing the props we can use interface or create type
// reason to use this is it is more cleaner, more readable and more scalable ....... thats why we are using it 
interface MyButton {
    text: string,
    //using onclick function and making in interface
    // onClick: () => void, 
    onClick?: () => void, //making onClick optional parameter when passing to component
    isClickable?: boolean, //making boolean
    //multiple types
    text2?: string | number | boolean,
}

//we can use types in place of interface
type props = {
    text: string,
}

//React.FC is a functional component
// giving generics calss to our Button: React.FC
//one way to write code
// const Button: React.FC<MyButton> = (props) => {

//     //dectructuring props and using this is also one of the method
//     // we can also override method as it is optional in interface
//     const {text, isClickable, onClick = () => {}, text2} = props;
//     return <button onClick={onClick}>{text} {text2} {isClickable}</button>
// }


//another way we can do like this
const Button: React.FC<MyButton> = ({text, onClick}) => {
    return <button onClick={onClick}>{text}</button>
}

//by using types
// const Button: React.FC<props> = (props) => {
//     return <button>{props.text}</button>
// }

export default Button;