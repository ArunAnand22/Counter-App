import React from 'react'
import { useState } from 'react';
import './Counter.css'

function Counter() {
    const [counter,setCounter]=useState(0)
    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        if(counter!=0){
            setCounter(counter-1)
        }
    }
    function reset(){
        setCounter(0)
    }
  return (
    <div className='header'>
        <h2>Counter Application</h2>
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter