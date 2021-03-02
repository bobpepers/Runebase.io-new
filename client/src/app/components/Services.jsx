import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import ScrollableSection from 'react-update-url-on-scroll';
import RunesxLogo from '../assets/images/Runesx.png';
import theme from '../theme'

class Services extends Component{
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
    	const { t } = this.props;
    	let RunesX, StakingWorldStyle;
		if (this.state.hover) {
			if (this.state.hoverCat == "FourStake") {
		  		RunesX = theme.hover.in;
		  	}
		  	if (this.state.hoverCat == "StakingWorld") {
		  		StakingWorldStyle = theme.hover.in;
		  	}
		} else {
		  RunesX = theme.hover.out;
		  StakingWorldStyle = theme.hover.out;
		}
        return (
        	<ScrollableSection hash={'services'}>
        	<Grid container id='services' className={`text-center services-background`} direction="row" justify="center" alignItems="stretch">
        		<Grid item xs={12} className={`mt-${theme.spacing.section}`}>
	        		<h3 className="textBorder w-100 text-center">Services</h3>
	   				<div className="underline mx-auto"></div>
	   			</Grid>
        		<Grid item lg={6} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
        			<div className="w-100 d-flex">
        				<a style={RunesX} onMouseLeave={() => this.updateHoverState(false, "FourStake")} onMouseEnter={() => this.updateHoverState(true, "FourStake")} className="mx-auto" href="https://www.runesx.com">
        					<img className="mx-auto" src={RunesxLogo} height="128px" width="128px" alt="" />
        				</a>
        			</div>
        			<div className="w-100 d-flex">
	        			<a style={RunesX} onMouseLeave={() => this.updateHoverState(false, "FourStake")} onMouseEnter={() => this.updateHoverState(true, "FourStake")}  className="mx-auto titleStyled textBorder" href="https://www.runesx.com">
	            			RunesX
	            		</a>
	            	</div>
	            	<div className="w-100 d-flex">
	            		<a style={RunesX} onMouseLeave={() => this.updateHoverState(false, "FourStake")} onMouseEnter={() => this.updateHoverState(true, "FourStake")}  className="mx-auto textStyled textBorder" href="https://www.runesx.com">
	            			Advertise/Publish on RunesX
	            		</a>
            		</div>
        		</Grid>
        	</Grid>
        	</ScrollableSection>
        );
    };

}

export default withTranslation()(Services);