import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Image from 'react-bootstrap/Image';
import Jonas from '../assets/images/Jonas.png';
import Roberto from '../assets/images/Roberto.png';

import theme from '../theme';

export default class Team extends Component{
	constructor(props) {
		super(props)
		this.state = {
	      hover: false,
	      hoverCat: '',
	    };
	   	this.updateHoverState = this.updateHoverState.bind(this);
	}

	updateHoverState (hover, hoverCat) {
	  this.setState({
	  	hover: hover,
	  	hoverCat: hoverCat
	  })
	}

    render(){
    	let AltmarketsStyle, TxbitStyle;
  		if (this.state.hover) {
  			if (this.state.hoverCat == "Altmarkets") {
  		  		AltmarketsStyle = theme.hover.in;
  		  	}
  		  	if (this.state.hoverCat == "Txbit") {
  		  		TxbitStyle = theme.hover.in;
  		  	}
  		} else {
  		  AltmarketsStyle = theme.hover.out;
  		  TxbitStyle = theme.hover.out;
  		}
        return (
        	<Grid container className={`mt-${theme.spacing.section} mb-${theme.spacing.section}`}>
        		<Grid item xs={6}>
        			<div className="w-100 d-flex">
        				<a style={AltmarketsStyle} onMouseLeave={() => this.updateHoverState(false, "Jonas")} onMouseEnter={() => this.updateHoverState(true, "Jonas")} className="mx-auto" href="https://discord.gg/hYhZB9m">
        					<Image roundedCircle className="mx-auto" src={Jonas} height="128px" width="128px" alt="" />
        				</a>
        			</div>
        			<div className="w-100 d-flex">
	        			<span className="mx-auto titleStyled textBorder">
	            			Jonas Collier
	            		</span>
	            	</div>
	            	<div className="w-100 d-flex">
	            		<span className="mx-auto textStyled textBorder">
	            			Developer
	            		</span>
            		</div>
        		</Grid>
        		<Grid item xs={6}>
        			<div className="w-100 d-flex">
        				<span className="mx-auto">
        					<Image roundedCircle className="mx-auto" src={Roberto} height="128px" width="128px" alt="" />
        				</span>
        			</div>
        			<div className="w-100 d-flex">
	        			<span className="mx-auto titleStyled textBorder">
	            			Roberto
	            		</span>
	            	</div>
	            	<div className="w-100 d-flex">
	            		<span className="mx-auto textStyled textBorder">
	            			Trade RUNES on Roberto
	            		</span>
            		</div>
        		</Grid>
        	</Grid>
        );
    };

}
