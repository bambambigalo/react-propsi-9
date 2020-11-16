import React from 'react';



export default function Optima (props) {

  let list = [
    'счет',
    'просмотры',
    'команды'
  ]
    let res = props.res;

  
  return (
    <div>

    <p> Второй результат: {res}</p>

    <p>  Список: </p>

    <p> 
    {list.map(porn => {return <li key = {porn}>{porn} {res}</li> })} 
    </p>

    </div>
  );
}