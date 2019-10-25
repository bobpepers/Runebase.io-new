import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Image from 'react-bootstrap/Image';
import Jonas from '../assets/images/Jonas.png';
import Roberto from '../assets/images/Roberto.png';
import Patricia from '../assets/images/Patricia.png';
import Alex from '../assets/images/Alex.png';
import Lucas from '../assets/images/Lucas.png';
import Marcio from '../assets/images/Marcio.png';

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
        	<Grid container id='team' className={`text-center mt-${theme.spacing.section} mb-${theme.spacing.section}`} direction="row" justify="center" alignItems="stretch">
            <Grid item xs={12}>
              <h3 className="textBorder w-100 text-center">Meet the Team</h3>
              <div className="underline mx-auto mb-5"></div>
            </Grid>
        		<Grid item xs={4}>
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
	            			Developer
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
                        <i className="fab fa-telegram fa-lg"></i><
                      /a>
                    </div>
                  </div>
                </div>
        		</Grid>
        		<Grid item xs={4}>
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
	            			Marketing Strategy
	            		</span>
            		</div>
        		</Grid>
            <Grid item xs={4}>
              <div className="w-100 d-flex">
                <span className="mx-auto">
                  <Image roundedCircle className="mx-auto imageBorderTeam" src={Patricia} height="128px" width="128px" alt="" />
                </span>
              </div>
              <div className="w-100 d-flex">
                <span className="mx-auto titleStyled textBorder">
                    Patricia Damiana
                  </span>
                </div>
                <div className="w-100 d-flex">
                  <span className="mx-auto textStyled textBorder">
                    Community Management
                  </span>
                </div>
            </Grid>
            <Grid item xs={4}>
              <div className="w-100 d-flex">
                <span className="mx-auto">
                  <Image roundedCircle className="mx-auto imageBorderTeam" src={Alex} height="128px" width="128px" alt="" />
                </span>
              </div>
              <div className="w-100 d-flex">
                <span className="mx-auto titleStyled textBorder">
                    Alex De Jesus
                  </span>
                </div>
                <div className="w-100 d-flex">
                  <span className="mx-auto textStyled textBorder">
                    Marketing
                  </span>
                </div>
            </Grid>
            <Grid item xs={4}>
              <div className="w-100 d-flex">
                <span className="mx-auto">
                  <Image roundedCircle className="mx-auto imageBorderTeam" src={Lucas} height="128px" width="128px" alt="" />
                </span>
              </div>
              <div className="w-100 d-flex">
                <span className="mx-auto titleStyled textBorder">
                    Lucas Stevan Rodrigues Oliveira
                  </span>
                </div>
                <div className="w-100 d-flex">
                  <span className="mx-auto textStyled textBorder">
                    Consultant & Graphic Design
                  </span>
                </div>
            </Grid>
            <Grid item xs={4}>
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
                    Social Media Strategist
                  </span>
                </div>
            </Grid>
        	</Grid>
        );
    };

}
