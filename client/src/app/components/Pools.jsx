import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import ScrollableSection from 'react-update-url-on-scroll';
import FourStake from '../assets/images/FourStake.png';
import StakingWorld from '../assets/images/StakingWorld.png';
import theme from '../theme'

class Pools extends Component{
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
        	<ScrollableSection hash={'pools'}>
        	<Grid container id='pools' className={`text-center`} direction="row" justify="center" alignItems="stretch">
        		<Grid item xs={12} className={`mt-${theme.spacing.section}`}>
	        		<h3 className="textBorder w-100 text-center">{t('stakesDescription')}</h3>
	   				<div className="underline mx-auto"></div>
	   			</Grid>
        		<Grid item lg={6} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
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
	            			{t('FourStakeDescription')}
	            		</a>
            		</div>
        		</Grid>
        		<Grid item lg={6} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
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
	            			{t('StakingWorldDescription')}
	            		</a>
            		</div>
        		</Grid>
        	</Grid>
        	</ScrollableSection>
        );
    };

}

export default withTranslation()(Pools);