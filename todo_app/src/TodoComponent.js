import React from 'react';


const TodoComponent = (props) => {
  const { todo } = props;
  return (
    todo.map(item => <li onClick={props.removeItem} key={item}>{item}</li>)
  )
}

export default TodoComponent;
