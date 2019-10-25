import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import theme from '../theme'
import * as actions from '../actions/contact';

class ContactSuccess extends Component {
	constructor(props) {
	    super(props);
	}
	componentWillUnmount() {
	  this.props.contactReset();
	}
    render(){
    	//this.user = JSON.parse(localStorage.getItem('user'));
    	console.log(this.props.contact);
    	console.log('2');
    	console.log(this.props);
    	const data = this.props.data;
    	console.log(data);
    	const { name, email, message } = this.props.contact;
    	console.log(name);
        return (
        	<Grid container id='pools' className={`text-center`} direction="row" justify="center" alignItems="stretch">
        		<Grid item xs={12} className={`mt-${theme.spacing.section}`}>
	        		<h3 className="textBorder w-100 text-center">Sending Successful</h3>
	   				<div className="underline mx-auto"></div>
	   			</Grid>
	   			<Grid item xs={12} className={`mt-${theme.spacing.section}`}>
	        		<p className="textBorder w-100 text-center">name: {name}</p>
	        		<p className="textBorder w-100 text-center">email: {email}</p>
	        		<p className="textBorder w-100 text-center">message: {message}</p>
	   			</Grid>
        	</Grid>
        );
    };

}

function mapStateToProps(state) {
	console.log(state);
  return { contact: state.contact.list };
}

export default connect(mapStateToProps, actions)(ContactSuccess);