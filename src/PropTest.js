import React, {useState} from 'react';
import Optima from './Optima.js';



export default function PropTest () {
  
  const [counter,setCounter]= useState (0)
  
  function increment () {
    setCounter (counter +1)
  }
  function dicrement () {
    setCounter (counter -1)
  }
  function reset () {
    setCounter ( 0 )
  }
  
  
  return (


       <div>
       
    <p> Результат: {counter}</p>
     <button onClick = {increment}>плюс 1</button>
     <button onClick = {dicrement}>минус 1</button>
     <button onClick = {reset}>сброс</button>
     <Optima res = {counter}/>
    </div>
  )
}