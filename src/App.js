import React, { Component } from 'react';
import  TodoHeader from './todoHeader';
import  TodoList from './todoList';
import  TodoForm from './todoForm';
import './App.css';

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {items: []};
      this.updateItems = this.updateItems.bind(this);
  }

  updateItems(newItem){
    var allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  }
  delete(id){
      this.setState(prevState => ({
          items: prevState.items.filter(el => el != id )
      }));
   }
  render() {
    return (
      <div>
        <TodoHeader/>
        <TodoForm onFormSubmit={this.updateItems}/>
        <TodoList delete={this.delete} items={this.state.items}/>
      </div>
    );
  }
}

