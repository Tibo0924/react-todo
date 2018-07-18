import React from "react";



const HeaderComponent = (props) => {
  return <div className="header">
      <h2>Simple Todo App</h2>
      <em>react.js</em>
      <hr />
      {props.message !== "" && <p className="message text-danger">{props.message}</p>}
    </div>;
};

export default HeaderComponent;