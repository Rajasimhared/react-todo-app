import React, { Component } from 'react';
import './App.css'

export default class TodoListItem extends Component{
	delete(id){
		this.props.delete(id);
    }
	render(){
		return(
			<div className="output">
			<table class="table .table-condensed">
			<tbody>
      		<tr>
				<td>{this.props.children}</td>
		<td>	<div class="btn-group" className="buttons">
    			<button type="button" onClick={this.delete.bind(this, this.props.items)} class="btn btn-success">Done! </button>
    			</div></td></tr>
  		 </tbody>
  </table>
			</div>
		);
	}
}