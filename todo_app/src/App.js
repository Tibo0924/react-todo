import React from "react";
import TodoComponent from './TodoComponent';
import HeaderComponent from './HeaderComponent';
import InputComponent from './InputComponent';






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: ["iron clothes", "eat paprika crisps", "bohh"],
      newTodo: ""
    };
  }

  handleInputChange(e) {
    this.setState({ newTodo: e.target.value });
  }

  clickHandler(){
    const currentState = this.state.todolist;
// 
    if(this.state.newTodo !== ""){
      currentState.push(this.state.newTodo)
// 
      this.setState({todoList: currentState})
    }

  }
  render() {
    return (
      <div>
        <HeaderComponent />
        <InputComponent induljunkel={this.clickHandler.bind(this)} inputFunction={this.handleInputChange.bind(this)} />
        <TodoComponent todo={this.state.todolist} />
        {/* <InputComponent /> */}
      </div>
    );
  }
}
export default App;