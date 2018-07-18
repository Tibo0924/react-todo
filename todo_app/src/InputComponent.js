import React from 'react';



const InputComponent = (props) => {
  return (
    <div className="text-center">
      <input type="text" onChange={props.inputFunction} placeholder="add something"></input>
      <button className="btn btn-success" onClick={props.induljunkel}>Add todo!</button>
    </div>
  )
}


export default InputComponent;