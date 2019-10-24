import React, { Component } from 'react';
import * as actions from '../actions/auth';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

class ChainInfo extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <section id='info' className='chainInfoBG'>
        <div className="container chainInfo">
          <Grid container className="d-flex justify-content-around justify-content-md-center Grid itemst-unstyled categories ng-scope" ng-controller="myController">
            <Grid item className="text-center col-md-4 borderGray">
              <p className='noBottomMargin'>Block Time</p>
              <p className='noBottomMargin'>2min</p>
            </Grid>
            <Grid item className="text-center col-md-4 borderGray">
              <p className='noBottomMargin'>Minted Blocks</p>
              <p className='noBottomMargin'>299003</p>
            </Grid>
            <Grid item className="text-center col-md-4 borderGray">
              <p className='noBottomMargin'>Type</p>
              <p className='noBottomMargin'>Proof of Stake</p>
            </Grid>
            <Grid item className="text-center col-md-4 borderGray">
              <p className='noBottomMargin'>Block Reward</p>
              <p className='noBottomMargin'>100</p>
            </Grid>
            <Grid item className="text-center col-md-4 borderGray">
              <p className='noBottomMargin'>Circulating Supply</p>
              <p className='noBottomMargin'>29900300</p>
            </Grid>
            <Grid item className="text-center col-md-4 borderGray">
              <p className='noBottomMargin'>Current Price</p>
              <p className='noBottomMargin'>$ 0.00024663</p>
            </Grid>
          </Grid>
        </div>
      </section>
    )
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


export default connect(mapStateToProps, actions)(ChainInfo);
