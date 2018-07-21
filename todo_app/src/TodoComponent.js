import React from 'react';


const TodoComponent = (props) => {
  const { todo } = props;

  
  return <div className="container">

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Todo</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            todo.map( (item,i) =>{
              return (
            <tr>{i+1}
              <th scope="row"></th>
                <td key={i}>
                  {item}
                </td>
                  <button type="button" className="btn btn-sm">
                    X 
                </button>
            </tr>
            )}
            )
          }
        </tbody>
      </table>
    </div>;
  }


export default TodoComponent;
