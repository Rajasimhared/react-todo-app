import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default class TodoForm extends Component{
	constructor(props) {
      super(props);
      this.state = {item: ''};
       this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
	}

  	handleChange(e){
  		console.log('e',e.target.value);
  		this.setState({item: e.target.value});
  	}
  	handleSubmit(e){
  		e.preventDefault();
  		this.props.onFormSubmit(this.state.item);
  		this.setState({item: ''});
  		ReactDOM.findDOMNode(this.refs.item).focus();
  		return;
  	}
  	render(){
  		return(
  			<div>
  			<form id="place" onSubmit={this.handleSubmit}>
  				<input type="text" id="inputs" ref="item" placeholder="What you want to do?" onChange={this.handleChange} value={this.state.item}/>
  			</form>
  			</div>
		);
	}
}