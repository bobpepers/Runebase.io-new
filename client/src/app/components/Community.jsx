import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import Discord from '../assets/images/Discord.png';
import Medium from '../assets/images/Medium.png';
import Telegram from '../assets/images/Telegram.png';
import Twitter from '../assets/images/Twitter.png';

import theme from "../theme";

class Community extends Component{
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
    	let DiscordStyle, TwitterStyle, TelegramStyle, MediumStyle;
		if (this.state.hover) {
			if (this.state.hoverCat == "Discord") {
		  		DiscordStyle = theme.hover.in;
		  	}
		  	if (this.state.hoverCat == "Twitter") {
		  		TwitterStyle = theme.hover.in;
		  	}
		  	if (this.state.hoverCat == "Medium") {
		  		MediumStyle = theme.hover.in;
		  	}
		  	if (this.state.hoverCat == "Telegram") {
		  		TelegramStyle = theme.hover.in;
		  	}
		} else {
		  DiscordStyle = theme.hover.out;
		  TwitterStyle = theme.hover.out;
		  MediumStyle = theme.hover.out;
		  TelegramStyle = theme.hover.out;
		}
        return (
        	<Grid container id='community' className={`text-center`} direction="row" justify="center" alignItems="stretch">
	        	<Grid item xs={12} className={`mt-${theme.spacing.section}`}>
	        		<h3 className="textBorder w-100 text-center">{t('community')}</h3>
	   				<div className="underline mx-auto"></div>
	   			</Grid>
        		<Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
        			<div className="w-100 d-flex">
        				<a style={DiscordStyle} onMouseLeave={() => this.updateHoverState(false, "Discord")} onMouseEnter={() => this.updateHoverState(true, "Discord")} className="mx-auto" href="https://discord.gg/hYhZB9m">
        					<img className="mx-auto" src={Discord} height="128px" width="128px" alt="" />
        				</a>
        			</div>
        			<div className="w-100 d-flex">
	        			<a style={DiscordStyle} onMouseLeave={() => this.updateHoverState(false, "Discord")} onMouseEnter={() => this.updateHoverState(true, "Discord")}  className="mx-auto titleStyled textBorder" href="https://discord.gg/hYhZB9m">
	            			Discord
	            		</a>
	            	</div>
	            	<div className="w-100 d-flex">
	            		<a style={DiscordStyle} onMouseLeave={() => this.updateHoverState(false, "Discord")} onMouseEnter={() => this.updateHoverState(true, "Discord")}  className="mx-auto textStyled textBorder" href="https://discord.gg/hYhZB9m">
	            			{t('discordDescription')}
	            		</a>
            		</div>
        		</Grid>
        		<Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
        			<div className="w-100 d-flex">
        				<a style={MediumStyle} onMouseLeave={() => this.updateHoverState(false, "Medium")} onMouseEnter={() => this.updateHoverState(true, "Medium")} className="mx-auto" href="https://www.medium.com/@runebase">
        					<img className="mx-auto" src={Medium} height="128px" width="128px" alt="" />
        				</a>
        			</div>
        			<div className="w-100 d-flex">
	        			<a style={MediumStyle} onMouseLeave={() => this.updateHoverState(false, "Medium")} onMouseEnter={() => this.updateHoverState(true, "Medium")}  className="mx-auto titleStyled textBorder" href="https://www.medium.com/@runebase">
	            			Medium
	            		</a>
	            	</div>
	            	<div className="w-100 d-flex">
	            		<a style={MediumStyle} onMouseLeave={() => this.updateHoverState(false, "Medium")} onMouseEnter={() => this.updateHoverState(true, "Medium")}  className="mx-auto textStyled textBorder" href="https://www.medium.com/@runebase">
	            			{t('mediumDescription')}
	            		</a>
            		</div>
        		</Grid>
        		<Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
        			<div className="w-100 d-flex">
        				<a style={TelegramStyle} onMouseLeave={() => this.updateHoverState(false, "Telegram")} onMouseEnter={() => this.updateHoverState(true, "Telegram")} className="mx-auto" href="https://t.me/joinchat/IPVfFlPX-ieSK1QxfNc4Jw">
        					<img className="mx-auto" src={Telegram} height="128px" width="128px" alt="" />
        				</a>
        			</div>
        			<div className="w-100 d-flex">
	        			<a style={TelegramStyle} onMouseLeave={() => this.updateHoverState(false, "Telegram")} onMouseEnter={() => this.updateHoverState(true, "Telegram")}  className="mx-auto titleStyled textBorder" href="https://t.me/joinchat/IPVfFlPX-ieSK1QxfNc4Jw">
	            			Telegram
	            		</a>
	            	</div>
	            	<div className="w-100 d-flex">
	            		<a style={TelegramStyle} onMouseLeave={() => this.updateHoverState(false, "Telegram")} onMouseEnter={() => this.updateHoverState(true, "Telegram")}  className="mx-auto textStyled textBorder" href="https://t.me/joinchat/IPVfFlPX-ieSK1QxfNc4Jw">
	            			{t('telegramDescription')}
	            		</a>
            		</div>
        		</Grid>
        		<Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
        			<div className="w-100 d-flex">
        				<a style={TwitterStyle} onMouseLeave={() => this.updateHoverState(false, "Twitter")} onMouseEnter={() => this.updateHoverState(true, "Twitter")} className="mx-auto" href="https://discord.gg/hYhZB9m">
        					<img className="mx-auto" src={Twitter} height="128px" width="128px" alt="" />
        				</a>
        			</div>
        			<div className="w-100 d-flex">
	        			<a style={TwitterStyle} onMouseLeave={() => this.updateHoverState(false, "Twitter")} onMouseEnter={() => this.updateHoverState(true, "Twitter")}  className="mx-auto titleStyled textBorder" href="https://discord.gg/hYhZB9m">
	            			Twitter
	            		</a>
	            	</div>
	            	<div className="w-100 d-flex">
	            		<a style={TwitterStyle} onMouseLeave={() => this.updateHoverState(false, "Twitter")} onMouseEnter={() => this.updateHoverState(true, "Twitter")}  className="mx-auto textStyled textBorder" href="https://discord.gg/hYhZB9m">
	            			{t('twitterDescription')}
	            		</a>
            		</div>
        		</Grid>
        	</Grid>
        );
    };

}

export default withTranslation()(Community);