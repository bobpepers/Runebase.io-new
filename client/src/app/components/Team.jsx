import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import Image from 'react-bootstrap/Image';
import ScrollableSection from 'react-update-url-on-scroll';
import Jonas from '../assets/images/Jonas.png';
import Roberto from '../assets/images/Roberto.png';
import Patricia from '../assets/images/Patricia.png';
import Andrezin from '../assets/images/Andrezin.png';
import Joshua from '../assets/images/Joshua.png';
import Marcio from '../assets/images/Marcio.png';
import JonasD from '../assets/images/JonasD.png'

import theme from '../theme';

class Team extends Component{
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
          <ScrollableSection hash={'team'}>
            <div id='team'>
            	<Grid container className={`text-center backgroundTeam`} direction="row" justify="center" alignItems="stretch">
                <Grid item xs={12} className={`mt-${theme.spacing.section}`} >
                  <h3 className="textBorder w-100 text-center">{t('meetTeam')}</h3>
                  <div className="underline mx-auto"></div>
                </Grid>
            		<Grid item lg={4} md={6} sm={12} xs={12} className={`mt-${theme.spacing.marginTopItem}`}>
            			<div className="w-100 d-flex">
            					<Image roundedCircle className="mx-auto imageBorderTeam" src={Jonas} height="128px" width="128px" alt="" />
            			</div>
            			<div className="w-100 d-flex">
    	        			<span className="mx-auto titleStyled textBorder">
    	            			Jonas Collier
    	            		</span>
    	            	</div>
    	            	<div className="w-100 d-flex">
    	            		<span className="mx-auto textStyled textBorder">
    	            			{t('developer')}
    	            		</span>
                		</div>
                    <div className="d-flex">
                      <div className="d-flex mx-auto">
                        <div className="socialIcon m-2">
                          <a className="community-text-link link-community" href="https://www.linkedin.com/in/jonas-collier-86835b86" style={{color: 'rgb(255, 255, 255)'}}>
                            <i className="fab fa-linkedin fa-lg"></i>
                          </a>
                        </div>
                        <div className="socialIcon m-2">
                          <a className="community-text-link link-community" href="https://t.me/Bagosan" style={{color: 'rgb(255, 255, 255)'}}>
                            <i className="fab fa-telegram fa-lg"></i></a>
                        </div>
                      </div>
                    </div>
            		</Grid>
            		<Grid item lg={4} md={6} sm={12} xs={12} className={`mt-${theme.spacing.marginTopItem}`}>
            			<div className="w-100 d-flex">
            				<span className="mx-auto">
            					<Image roundedCircle className="mx-auto imageBorderTeam" src={Roberto} height="128px" width="128px" alt="" />
            				</span>
            			</div>
            			<div className="w-100 d-flex">
    	        			<span className="mx-auto titleStyled textBorder">
    	            			Roberto Paixão
    	            		</span>
    	            	</div>
    	            	<div className="w-100 d-flex">
    	            		<span className="mx-auto textStyled textBorder">
    	            			{t('marketingStrategy')}
    	            		</span>
                		</div>
                    <div className="d-flex">
                      <div className="d-flex mx-auto">
                        <div className="socialIcon m-2">
                          <a className="community-text-link link-community" href="https://www.linkedin.com/in/roberto-paixão-2ba07b18b" style={{color: 'rgb(255, 255, 255)'}}>
                            <i className="fab fa-linkedin fa-lg"></i>
                          </a>
                        </div>
                        <div className="socialIcon m-2">
                          <a className="community-text-link link-community" href="https://t.me/Robertopaixao" style={{color: 'rgb(255, 255, 255)'}}>
                            <i className="fab fa-telegram fa-lg"></i></a>
                        </div>
                      </div>
                    </div>
            		</Grid>
                <Grid item lg={4} md={6} sm={12} xs={12} className={`mt-${theme.spacing.marginTopItem}`}>
                  <div className="w-100 d-flex">
                    <span className="mx-auto">
                      <Image roundedCircle className="mx-auto imageBorderTeam" src={JonasD} height="128px" width="128px" alt="" />
                    </span>
                  </div>
                  <div className="w-100 d-flex">
                    <span className="mx-auto titleStyled textBorder">
                        Jonas Dahlberg
                      </span>
                    </div>
                    <div className="w-100 d-flex">
                      <span className="mx-auto textStyled textBorder">
                        {t('graphicDesign')}
                      </span>
                    </div>
                    <div className="d-flex">
                      <div className="d-flex mx-auto">
                        <div className="socialIcon m-2">
                          <a className="community-text-link link-community" href="https://t.me/eYm1990" style={{color: 'rgb(255, 255, 255)'}}>
                            <i className="fab fa-telegram fa-lg"></i></a>
                        </div>
                      </div>
                    </div>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12} className={`mt-${theme.spacing.marginTopItem}`}>
                  <div className="w-100 d-flex">
                    <span className="mx-auto">
                      <Image roundedCircle className="mx-auto imageBorderTeam" src={Andrezin} height="128px" width="128px" alt="" />
                    </span>
                  </div>
                  <div className="w-100 d-flex">
                    <span className="mx-auto titleStyled textBorder">
                        Andrezin Ferreira
                      </span>
                    </div>
                    <div className="w-100 d-flex">
                      <span className="mx-auto textStyled textBorder">
                        {t('translator_en_pt')}
                      </span>
                    </div>
                    <div className="d-flex">
                      <div className="d-flex mx-auto">
                        <div className="socialIcon m-2">
                          <a className="community-text-link link-community" href="https://t.me/AndrezinFerreira" style={{color: 'rgb(255, 255, 255)'}}>
                            <i className="fab fa-telegram fa-lg"></i></a>
                        </div>
                      </div>
                    </div>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12} className={`mt-${theme.spacing.marginTopItem}`}>
                  <div className="w-100 d-flex">
                    <span className="mx-auto">
                      <Image roundedCircle className="mx-auto imageBorderTeam" src={Joshua} height="128px" width="128px" alt="" />
                    </span>
                  </div>
                  <div className="w-100 d-flex">
                    <span className="mx-auto titleStyled textBorder">
                        Joshua Peprah
                      </span>
                    </div>
                    <div className="w-100 d-flex">
                      <span className="mx-auto textStyled textBorder">
                        {t('prepahDescription')}
                      </span>
                    </div>
                    <div className="d-flex">
                      <div className="d-flex mx-auto">
                        <div className="socialIcon m-2">
                          <a className="community-text-link link-community" href="https://t.me/jato77" style={{color: 'rgb(255, 255, 255)'}}>
                            <i className="fab fa-telegram fa-lg"></i></a>
                        </div>
                        <div className="socialIcon m-2">
                          <a className="community-text-link link-community" href="https://www.facebook.com/dhanyataj3" style={{color: 'rgb(255, 255, 255)'}}>
                            <i className="fab fa-facebook fa-lg"></i></a>
                        </div>
                      </div>
                    </div>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12} className={`mt-${theme.spacing.marginTopItem}`}>
                  <div className="w-100 d-flex">
                    <span className="mx-auto">
                      <Image roundedCircle className="mx-auto imageBorderTeam" src={Marcio} height="128px" width="128px" alt="" />
                    </span>
                  </div>
                  <div className="w-100 d-flex">
                    <span className="mx-auto titleStyled textBorder">
                        Marcio Kipper
                      </span>
                    </div>
                    <div className="w-100 d-flex">
                      <span className="mx-auto textStyled textBorder">
                        {t('socialMediaStrategist')}
                      </span>
                    </div>
                    <div className="d-flex">
                      <div className="d-flex mx-auto">
                        <div className="socialIcon m-2">
                          <a className="community-text-link link-community" href="https://www.linkedin.com/in/marcio-kipper-194738162" style={{color: 'rgb(255, 255, 255)'}}>
                            <i className="fab fa-linkedin fa-lg"></i>
                          </a>
                        </div>
                        <div className="socialIcon m-2">
                          <a className="community-text-link link-community" href="https://t.me/Marciokipper" style={{color: 'rgb(255, 255, 255)'}}>
                            <i className="fab fa-telegram fa-lg"></i></a>
                        </div>
                        <div className="socialIcon m-2">
                          <a className="community-text-link link-community" href="https://www.facebook.com/profile.php?id=100009550941843" style={{color: 'rgb(255, 255, 255)'}}>
                            <i className="fab fa-facebook fa-lg"></i></a>
                        </div>
                      </div>
                    </div>
                </Grid>
            	</Grid>
            </div>
          </ScrollableSection>
        );
    };

}
export default withTranslation()(Team);