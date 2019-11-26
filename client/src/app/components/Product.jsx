import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ScrollableSection from 'react-update-url-on-scroll';
import { withTranslation } from 'react-i18next';
import FourStake from '../assets/images/FourStake.png';
import StakingWorld from '../assets/images/StakingWorld.png';
import theme from '../theme'

class Product extends Component{
	constructor(props) {
		super(props)
	}

    render(){
        const { t } = this.props;
        return (
            <ScrollableSection hash={'product'}>
        	<Grid container id='product' className={`backgroundProduct text-center textBorder`} direction="row" justify="center" alignItems="stretch">
        		<Grid item xs={12} className={`mt-${theme.spacing.section}`}>
	        		<h3 className="textBorder w-100 text-center">{t('talkProduct')}</h3>
	   				<div className="underline mx-auto"></div>
	   			</Grid>
	   			<Grid item xs={12} className={`mx-auto textBorder mt-${theme.spacing.marginTopItem}`}>
	   				<p className='mx-auto text-center'>{t('productDescription')}</p>
	   			</Grid>
        		<Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
        			<div className="w-100 d-flex">
        					<i className="fas fa-network-wired mx-auto brand-icon-size"></i>
        			</div>
        			<div className="w-100 d-flex">
	            			<h4 className='mx-auto titleStyled textBorder'>{t('decentralized')}</h4>
	            	</div>
	            	<div className="w-100 d-flex">
	            			<p className='text-center'>{t('decentralizedDescription')}</p>
            		</div>
        		</Grid>
        		<Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
        			<div className="w-100 d-flex">
        					<i className="fas fa-file-signature mx-auto brand-icon-size"></i>
        			</div>
        			<div className="w-100 d-flex">
	            			<h4 className='mx-auto titleStyled textBorder'>{t('smartContracts')}</h4>
	            	</div>
	            	<div className="w-100 d-flex">
	            			<p className='text-center'>{t('smartContractsDescription')}</p>
            		</div>
        		</Grid>
        		<Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
        			<div className="w-100 d-flex">
        					<i className="fas fa-hand-holding-usd mx-auto brand-icon-size"></i>
        			</div>
        			<div className="w-100 d-flex">
	            			<h4 className='mx-auto titleStyled textBorder'>{t('stakingReward')}</h4>
	            	</div>
	            	<div className="w-100 d-flex">
	            			<p className='text-center'>{t('stakingRewardDescription')}</p>
            		</div>
        		</Grid>
                <Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
                    <div className="w-100 d-flex">
                            <i className="fas fa-leaf brand-icon-size mx-auto"></i>
                    </div>
                    <div className="w-100 d-flex">
                            <h4 className='mx-auto titleStyled textBorder'>{t('green')}</h4>
                    </div>
                    <div className="w-100 d-flex">
                            <p className='text-center'>{t('greenDescription')}</p>
                    </div>
                </Grid>
                <Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
                    <div className="w-100 d-flex">
                            <i className="fas fa-comments brand-icon-size mx-auto"></i>
                    </div>
                    <div className="w-100 d-flex">
                            <h4 className='mx-auto titleStyled textBorder'>{t('community')}</h4>
                    </div>
                    <div className="w-100 d-flex">
                            <p className='text-center'>{t('communityDescription')}</p>
                    </div>
                </Grid>
        	</Grid>
            </ScrollableSection>
        );
    };

}

export default withTranslation()(Product);