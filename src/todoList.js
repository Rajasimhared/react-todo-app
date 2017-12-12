import React, { Component } from 'react';
import TodoListItem from './todoListItem';
import './App.css'

export default class TodoList extends Component{
	render(){
		var createItem = function(itemText){
			if(itemText){	
			return(		
				<TodoListItem >{itemText}</TodoListItem>
			);
		}
		}
		return (
			<div className="new">
			<p>{this.props.items.map(createItem)}</p>
			</div>
		);
	}
}