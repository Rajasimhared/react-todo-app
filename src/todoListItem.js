import React, { Component } from 'react';
import './App.css'

export default class TodoListItem extends Component{
	render(){
		return(
			<div className="output">
			<input type="checkbox"/>  {this.props.children}
			</div>
		);
	}
}