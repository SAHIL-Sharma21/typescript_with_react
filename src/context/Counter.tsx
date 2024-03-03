// making context in ts


import React, {createContext, useState, useContext} from "react";


//interface for useState and counterContext value
interface CounterContextValue {
    count: number,
    setCount: (num: number) => void,
}

const CounterContext = createContext<CounterContextValue | null>(null);

//making interface so that we can pass children as react node
interface CounterProviderProps {
    children: React.ReactNode,
}

//making custom hooks
export const useCounter = ()=> {
    return useContext(CounterContext);
}

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {

    //we cannot pass setCount to our children as it is a function so to solve this we can make interface
    const [count, setCount] = useState<number>(1);


    return (
        <CounterContext.Provider value={{
            count: count,
            setCount
        }}>
            {props.children}
        </CounterContext.Provider>
    ) 
}