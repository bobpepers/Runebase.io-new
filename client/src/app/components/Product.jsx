import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import FourStake from '../assets/images/FourStake.png';
import StakingWorld from '../assets/images/StakingWorld.png';
import theme from '../theme'

export default class Product extends Component{
	constructor(props) {
		super(props)
	}

    render(){
        return (
        	<Grid container id='product' className={`backgroundProduct text-center textBorder`} direction="row" justify="center" alignItems="stretch">
        		<Grid item xs={12} className={`mt-${theme.spacing.section}`}>
	        		<h3 className="textBorder w-100 text-center">Let's talk Product</h3>
	   				<div className="underline mx-auto"></div>
	   			</Grid>
	   			<Grid item xs={12} className={`mx-auto textBorder mt-${theme.spacing.marginTopItem}`}>
	   				<p className='mx-auto text-center'>Runebase(Runes) is a Proof of Stake Coin and a Smart-Contract Platform.
Combining a modified Bitcoin Core infrastructure with an intercompatible version of the Ethereum Virtual Machine (EVM), Runebase merges the reliability of Bitcoin’s unfailing blockchain with the endless possibilities provided by smart contracts.</p>
	   			</Grid>
        		<Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
        			<div className="w-100 d-flex">
        					<img className="mx-auto" src={FourStake} height="128px" width="128px" alt="" />
        			</div>
        			<div className="w-100 d-flex">
	            			<h4 className='mx-auto titleStyled textBorder'>Decentralized</h4>
	            	</div>
	            	<div className="w-100 d-flex">
	            			<p className='text-center'>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
            		</div>
        		</Grid>
        		<Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
        			<div className="w-100 d-flex">
        					<img className="mx-auto" src={StakingWorld} height="128px" width="128px" alt="" />
        			</div>
        			<div className="w-100 d-flex">
	            			<h4 className='mx-auto titleStyled textBorder'>Smart Contracts</h4>
	            	</div>
	            	<div className="w-100 d-flex">
	            			<p className='text-center'>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
            		</div>
        		</Grid>
        		<Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
        			<div className="w-100 d-flex">
        					<img className="mx-auto" src={StakingWorld} height="128px" width="128px" alt="" />
        			</div>
        			<div className="w-100 d-flex">
	            			<h4 className='mx-auto titleStyled textBorder'>Staking Reward</h4>
	            	</div>
	            	<div className="w-100 d-flex">
	            			<p className='text-center'>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
            		</div>
        		</Grid>
                <Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
                    <div className="w-100 d-flex">
                            <img className="mx-auto" src={StakingWorld} height="128px" width="128px" alt="" />
                    </div>
                    <div className="w-100 d-flex">
                            <h4 className='mx-auto titleStyled textBorder'>Green</h4>
                    </div>
                    <div className="w-100 d-flex">
                            <p className='text-center'>Some info why proof of stake uses less energy</p>
                    </div>
                </Grid>
                <Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
                    <div className="w-100 d-flex">
                            <img className="mx-auto" src={StakingWorld} height="128px" width="128px" alt="" />
                    </div>
                    <div className="w-100 d-flex">
                            <h4 className='mx-auto titleStyled textBorder'>Community</h4>
                    </div>
                    <div className="w-100 d-flex">
                            <p className='text-center'>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                    </div>
                </Grid>
        	</Grid>
        );
    };

}
