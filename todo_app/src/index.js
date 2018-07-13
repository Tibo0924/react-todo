import React from "react";
import ReactDOM from "react-dom";


// 1. stateless component
const BodyComponent = ()=> {
  return (
    <h2>Simple Todo App</h2>
  )
}


// 2. nesting components
const HeaderComponent = () => {
  return (
    <div>
      <BodyComponent/>
      <h2>Stateless Component</h2>
      <PropsComponent name="Cowsay" age={25}/>
    </div>
  );
};

// 3. components that receives props
const PropsComponent = (props) => {
  // descructuring  props
  const{name,age} = props
  return (
    <p>PropsComponent => {name}{age}</p>
  )
}
// 4. validating prop types 
PropsComponent.prototype = {
  name : React.Proptype.string,
  age : React.Proptype.number

}
// 5. stateful component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
  }
  render() {
    return (
      <div>
        <HeaderComponent />
        <BodyComponent />
      </div>
    );
  }
}




ReactDOM.render(
      <App/>,
       document.getElementById("root"));