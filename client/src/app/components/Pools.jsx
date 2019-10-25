import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import FourStake from '../assets/images/FourStake.png';
import StakingWorld from '../assets/images/StakingWorld.png';
import theme from '../theme'

export default class Pools extends Component{
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
    	let FourStakeStyle, StakingWorldStyle;
		if (this.state.hover) {
			if (this.state.hoverCat == "FourStake") {
		  		FourStakeStyle = theme.hover.in;
		  	}
		  	if (this.state.hoverCat == "StakingWorld") {
		  		StakingWorldStyle = theme.hover.in;
		  	}
		} else {
		  FourStakeStyle = theme.hover.out;
		  StakingWorldStyle = theme.hover.out;
		}
        return (
        	<Grid container id='pools' className={`text-center mt-${theme.spacing.section} mb-${theme.spacing.section}`} direction="row" justify="center" alignItems="stretch">
        		<Grid item xs={12}>
	        		<h3 className="textBorder w-100 text-center">Stake RUNES on a Pool</h3>
	   				<div className="underline mx-auto mb-5"></div>
	   			</Grid>
        		<Grid item xs={6}>
        			<div className="w-100 d-flex">
        				<a style={FourStakeStyle} onMouseLeave={() => this.updateHoverState(false, "FourStake")} onMouseEnter={() => this.updateHoverState(true, "FourStake")} className="mx-auto" href="https://staking.world">
        					<img className="mx-auto" src={FourStake} height="128px" width="128px" alt="" />
        				</a>
        			</div>
        			<div className="w-100 d-flex">
	        			<a style={FourStakeStyle} onMouseLeave={() => this.updateHoverState(false, "FourStake")} onMouseEnter={() => this.updateHoverState(true, "FourStake")}  className="mx-auto titleStyled textBorder" href="https://staking.world">
	            			4Stake
	            		</a>
	            	</div>
	            	<div className="w-100 d-flex">
	            		<a style={FourStakeStyle} onMouseLeave={() => this.updateHoverState(false, "FourStake")} onMouseEnter={() => this.updateHoverState(true, "FourStake")}  className="mx-auto textStyled textBorder" href="https://staking.world">
	            			Stake RUNES on 4Stake
	            		</a>
            		</div>
        		</Grid>
        		<Grid item xs={6}>
        			<div className="w-100 d-flex">
        				<a style={StakingWorldStyle} onMouseLeave={() => this.updateHoverState(false, "StakingWorld")} onMouseEnter={() => this.updateHoverState(true, "StakingWorld")} className="mx-auto" href="https://www.4stake.com/">
        					<img className="mx-auto" src={StakingWorld} height="128px" width="128px" alt="" />
        				</a>
        			</div>
        			<div className="w-100 d-flex">
	        			<a style={StakingWorldStyle} onMouseLeave={() => this.updateHoverState(false, "StakingWorld")} onMouseEnter={() => this.updateHoverState(true, "StakingWorld")}  className="mx-auto titleStyled textBorder" href="https://www.4stake.com/">
	            			StakingWorld
	            		</a>
	            	</div>
	            	<div className="w-100 d-flex">
	            		<a style={StakingWorldStyle} onMouseLeave={() => this.updateHoverState(false, "StakingWorld")} onMouseEnter={() => this.updateHoverState(true, "StakingWorld")}  className="mx-auto textStyled textBorder" href="https://www.4stake.com/">
	            			Stake RUNES on StakingWorld
	            		</a>
            		</div>
        		</Grid>
        	</Grid>
        );
    };

}
