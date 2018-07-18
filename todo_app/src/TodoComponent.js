import React from 'react';


const TodoComponent = (props) => {
  const { todo } = props;
  return (
    <div className="container">
         {todo.map(
           item => <li key={item}>{item}
                        <button className="btn-sm btn-danger">
                          x
                        </button>
                    </li>
          
         )}
    </div>
      )

  }


export default TodoComponent;
