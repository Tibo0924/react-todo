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
              //current state of the array.
    if(this.state.newTodo !== ""){
              //if newTodo state is not an empty string.
      currentState.push(this.state.newTodo)
              //then push it to currentstate Array
      this.setState({todoList: currentState})
            //and update state ? 
    }
  }//clickHandler

  removeItem(e){
    
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