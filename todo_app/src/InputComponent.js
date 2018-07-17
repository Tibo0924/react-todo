import React from 'react';



const InputComponent = (props) => {
  return (
    <div>
      <input type="text" onChange={props.inputFunction}></input>
      <button onClick={props.induljunkel}>Add todo!</button>
    </div>
  )
}


export default InputComponent;