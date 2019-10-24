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
        	<Grid container id='product' className={`mt-${theme.spacing.section} mb-${theme.spacing.section}`}>
        		<Grid item xs={12}>
	        		<h3 className="textBorder w-100 text-center">Let's talk Product</h3>
	   				<div className="underline mx-auto mb-5"></div>
	   			</Grid>
	   			<Grid item xs={12}>
	   				<p className='mx-auto text-center'>Runebase(Runes) is a Proof of Stake Coin and a Smart-Contract Platform.
Combining a modified Bitcoin Core infrastructure with an intercompatible version of the Ethereum Virtual Machine (EVM), Runebase merges the reliability of Bitcoin’s unfailing blockchain with the endless possibilities provided by smart contracts.</p>
	   			</Grid>
        		<Grid item xs={4}>
        			<div className="w-100 d-flex">
        					<img className="mx-auto" src={FourStake} height="128px" width="128px" alt="" />
        			</div>
        			<div className="w-100 d-flex">
	            			<h4 className='productTitle mx-auto'>Chat</h4>
	            	</div>
	            	<div className="w-100 d-flex">
	            			<p className='text-center'>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
            		</div>
        		</Grid>
        		<Grid item xs={4}>
        			<div className="w-100 d-flex">
        					<img className="mx-auto" src={StakingWorld} height="128px" width="128px" alt="" />
        			</div>
        			<div className="w-100 d-flex">
	            			<h4 className='productTitle mx-auto'>Chat</h4>
	            	</div>
	            	<div className="w-100 d-flex">
	            			<p className='text-center'>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
            		</div>
        		</Grid>
        		<Grid item xs={4}>
        			<div className="w-100 d-flex">
        					<img className="mx-auto" src={StakingWorld} height="128px" width="128px" alt="" />
        			</div>
        			<div className="w-100 d-flex">
	            			<h4 className='productTitle mx-auto'>Chat</h4>
	            	</div>
	            	<div className="w-100 d-flex">
	            			<p className='text-center'>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
            		</div>
        		</Grid>
        	</Grid>
        );
    };

}
