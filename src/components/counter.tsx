"use client"

import {increment, decrement, incrementByAmount} from "@/lib/features/todos/todosSlice"

import {useAppDispatch, useAppSelector, useAppStore} from "@/lib/hooks"
import { useState } from "react";



export default function Counter(){

    const[inputValue, setInputValue] = useState(0);

    const value = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return(
        <div>
            <h1>Counter : {value}</h1>

             <button onClick={() => dispatch(increment())}>Increase</button>
             <button onClick={() => dispatch(decrement())}>Decearse</button>

<input className="border-[#b4dbc8] border-purple-500" type="number" onChange={(e) => setInputValue(parseInt(e.target.value))} />

<button onClick={() => dispatch(incrementByAmount(inputValue))}>Increment By {inputValue ? inputValue : ""}</button>
        </div>
    )
}