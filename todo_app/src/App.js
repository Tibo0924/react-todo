import React from "react";
import TodoComponent from './TodoComponent';
import HeaderComponent from './HeaderComponent';
import InputComponent from './InputComponent';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: ["iron clothes", "eat paprika crisps", "bohh"],
      newTodo: "",
      message:'',
    };
  }

  handleInputChange(e) {
    this.setState({ newTodo: e.target.value });
  }
  removeItem(item){
    console.log(item)
  }
  clickHandler(){
    const currentState = this.state.todolist;
    const newItem = this.state.newTodo;
    const isOnTheList = currentState.includes(newItem);

    if(isOnTheList){
      this.setState({
        message: 'Item is already on the list',
      })
    }else{
      this.setState({ message: '', })
      newItem && this.setState({todolist: [...currentState,newItem]})
    }
    /* if newItem not an empty string
      then state of todoList is currentstate + newItem at the end!
    */
    
  }//clickHandler
  
  render() {
    return <div>
        <HeaderComponent message={this.state.message}/>
        <InputComponent induljunkel={this.clickHandler.bind(this)} inputFunction={this.handleInputChange.bind(this)} />
        <TodoComponent todo={this.state.todolist} />
        {/* <InputComponent /> */}
      </div>;
  }
}
export default App;