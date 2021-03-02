import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import ScrollableSection from 'react-update-url-on-scroll';
import Altmarkets from '../assets/images/Altmarkets.png';
import Txbit from '../assets/images/Txbit.png';
import Bololex from '../assets/images/Bololex.png';
import LocalRunes from '../assets/images/LocalRunes.png';

import theme from '../theme';

class Exchanges extends Component{
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
    	let AltmarketsStyle, TxbitStyle, BololexStyle, LocalRunesStyle;
		if (this.state.hover) {
			if (this.state.hoverCat == "Altmarkets") {
		  		AltmarketsStyle = theme.hover.in;
		  	}
		  	if (this.state.hoverCat == "Txbit") {
		  		TxbitStyle = theme.hover.in;
		  	}
		  	if (this.state.hoverCat == "Bololex") {
		  		BololexStyle = theme.hover.in;
			  }
			  if (this.state.hoverCat == "LocalRunes") {
				LocalRunesStyle = theme.hover.in;
			}
		} else {
		  AltmarketsStyle = theme.hover.out;
		  TxbitStyle = theme.hover.out;
		  BololexStyle = theme.hover.out;
		  LocalRunesStyle = theme.hover.out;
		}
        return (
        	<ScrollableSection hash={'exchanges'}>
	        	<div id='exchanges'>
		        	<Grid container className='backgroundExchanges' direction="row" justify="center" alignItems="stretch">
		        		<Grid item xs={12} className={`text-center mt-${theme.spacing.section}`}>
			        		<h3 className="textBorder w-100 text-center">{t('tradeExchanges')}</h3>
			   				<div className="underline mx-auto"></div>
			   			</Grid>
		        		<Grid item lg={6} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
		        			<div className="w-100 d-flex">
		        				<a style={AltmarketsStyle} onMouseLeave={() => this.updateHoverState(false, "Altmarkets")} onMouseEnter={() => this.updateHoverState(true, "Altmarkets")} className="mx-auto" href="https://altmarkets.io/trading/runesbtc">
		        					<img className="mx-auto" src={Altmarkets} height="128px" width="128px" alt="" />
		        				</a>
		        			</div>
		        			<div className="w-100 d-flex">
			        			<a style={AltmarketsStyle} onMouseLeave={() => this.updateHoverState(false, "Altmarkets")} onMouseEnter={() => this.updateHoverState(true, "Altmarkets")}  className="mx-auto titleStyled textBorder" href="https://altmarkets.io/trading/runesbtc">
			            			Altmarkets
			            		</a>
			            	</div>
			            	<div className="w-100 d-flex">
			            		<a style={AltmarketsStyle} onMouseLeave={() => this.updateHoverState(false, "Altmarkets")} onMouseEnter={() => this.updateHoverState(true, "Altmarkets")}  className="mx-auto textStyled textBorder" href="https://altmarkets.io/trading/runesbtc">
			            			{t('altmarketDescription')}
			            		</a>
		            		</div>
		        		</Grid>
		        		<Grid item lg={6} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
		        			<div className="w-100 d-flex">
		        				<a style={TxbitStyle} onMouseLeave={() => this.updateHoverState(false, "Txbit")} onMouseEnter={() => this.updateHoverState(true, "Txbit")} className="mx-auto" href="https://txbit.io/Trade/RUNES/BTC">
		        					<img className="mx-auto" src={Txbit} height="128px" width="128px" alt="" />
		        				</a>
		        			</div>
		        			<div className="w-100 d-flex">
			        			<a style={TxbitStyle} onMouseLeave={() => this.updateHoverState(false, "Txbit")} onMouseEnter={() => this.updateHoverState(true, "Txbit")}  className="mx-auto titleStyled textBorder" href="https://txbit.io/Trade/RUNES/BTC">
			            			Txbit
			            		</a>
			            	</div>
			            	<div className="w-100 d-flex">
			            		<a style={TxbitStyle} onMouseLeave={() => this.updateHoverState(false, "Txbit")} onMouseEnter={() => this.updateHoverState(true, "Txbit")}  className="mx-auto textStyled textBorder" href="https://txbit.io/Trade/RUNES/BTC">
			            			{t('txbitDescription')}
			            		</a>
		            		</div>
		        		</Grid>
		        		<Grid item lg={6} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
		        			<div className="w-100 d-flex">
		        				<a style={BololexStyle} onMouseLeave={() => this.updateHoverState(false, "Bololex")} onMouseEnter={() => this.updateHoverState(true, "Bololex")} className="mx-auto" href="https://bololex.com/trading/?symbol=RUNES-BTC">
		        					<img className="mx-auto" src={Bololex} height="128px" width="128px" alt="" />
		        				</a>
		        			</div>
		        			<div className="w-100 d-flex">
			        			<a style={BololexStyle} onMouseLeave={() => this.updateHoverState(false, "Bololex")} onMouseEnter={() => this.updateHoverState(true, "Bololex")}  className="mx-auto titleStyled textBorder" href="https://bololex.com/trading/?symbol=RUNES-BTC">
			            			Bololex
			            		</a>
			            	</div>
			            	<div className="w-100 d-flex">
			            		<a style={BololexStyle} onMouseLeave={() => this.updateHoverState(false, "Bololex")} onMouseEnter={() => this.updateHoverState(true, "Bololex")}  className="mx-auto textStyled textBorder" href="https://bololex.com/trading/?symbol=RUNES-BTC">
			            			{t('bololexDescription')}
			            		</a>
		            		</div>
		        		</Grid>
						<Grid item lg={6} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
		        			<div className="w-100 d-flex">
		        				<a style={LocalRunesStyle} onMouseLeave={() => this.updateHoverState(false, "LocalRunes")} onMouseEnter={() => this.updateHoverState(true, "LocalRunes")} className="mx-auto" href="https://www.localrunes.com/">
		        					<img className="mx-auto" src={LocalRunes} height="128px" width="128px" alt="" />
		        				</a>
		        			</div>
		        			<div className="w-100 d-flex">
			        			<a style={LocalRunesStyle} onMouseLeave={() => this.updateHoverState(false, "LocalRunes")} onMouseEnter={() => this.updateHoverState(true, "LocalRunes")}  className="mx-auto titleStyled textBorder" href="https://www.localrunes.com/">
			            			LocalRunes
			            		</a>
			            	</div>
			            	<div className="w-100 d-flex">
			            		<a style={LocalRunesStyle} onMouseLeave={() => this.updateHoverState(false, "LocalRunes")} onMouseEnter={() => this.updateHoverState(true, "LocalRunes")}  className="mx-auto textStyled textBorder" href="https://www.localrunes.com/">
			            			{t('localRunesDescription')}
			            		</a>
		            		</div>
		        		</Grid>
		        	</Grid>
	        	</div>
        	</ScrollableSection>
        );
    };

}

export default withTranslation()(Exchanges);