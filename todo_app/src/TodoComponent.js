import React from 'react';


const TodoComponent = (props) => {
  const { todo } = props;
  return (
      todo.map(item => <li key={item}>{item}</li>)
  )
}

export default TodoComponent;
