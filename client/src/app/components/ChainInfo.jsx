import React, { Component } from 'react';
import * as actions from '../actions/auth';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Pusher from 'pusher-js';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'react-i18next';
import * as actionsChainInfo from '../actions/chainInfo';
import { fetchChainInfo } from "../actions/chainInfoActions";
import ChainInfoList from "./ChainInfoList";

const PUSHER_APP_KEY = '61736641765693f89500';
const PUSHER_APP_CLUSTER = 'eu';

class ChainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      blockNumber: '',
      moneySupply: '',
      reward: '100',
      type: 'Proof of Stake',
      time: '2min',
    };
    this.updateChainInfo = this.updateChainInfo.bind(this);
  }

  async componentDidMount() {
    await this.props.dispatch(fetchChainInfo());
    console.log(this.props);
    console.log(this.props.chaininfo);
    this.setState(() => ({
        price: this.props.chaininfo[0].price,
        blockNumber: this.props.chaininfo[0].blockNumber,
        moneySupply: this.props.chaininfo[0].moneySupply,
    }));
    console.log(this.props);
    this.pusher = new Pusher(PUSHER_APP_KEY, {
      cluster: PUSHER_APP_CLUSTER,
      useTLS: true,
    });
    this.channel = this.pusher.subscribe('chainInfos');
    console.log(this.channel);
    this.channel.bind('inserted', this.updateChainInfo);
  }
  updateChainInfo(chainInfoUpdate) {
    console.log('123');
    console.log(chainInfoUpdate);
    if (chainInfoUpdate.price) {
      this.setState(() => ({
          price: chainInfoUpdate.price,
          blockNumber: chainInfoUpdate.blockNumber,
          moneySupply: chainInfoUpdate.moneySupply,
      }));
    }
    else {
      this.setState(() => ({
        blockNumber: chainInfoUpdate.blockNumber,
        moneySupply: chainInfoUpdate.moneySupply,
    }));
    }

  }



  render() {
    const { t } = this.props;
    const { error, loading, chaininfo } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <section className='chainInfoBG'>
        <div className="chainInfo">
          <Grid container className="d-flex justify-content-around justify-content-md-center Grid itemst-unstyled categories ng-scope" ng-controller="myController">
            <Grid item className="text-center col-md-4 borderGray">
              <p className='noBottomMargin'>{t('blockTime')}</p>
              <p className='noBottomMargin'>{this.state.time}</p>
            </Grid>
            <Grid item className="text-center col-md-4 borderGray">
              <p className='noBottomMargin'>{t('mintedBlocks')}</p>
              <p className='noBottomMargin'>{this.state.blockNumber}</p>
            </Grid>
            <Grid item className="text-center col-md-4 borderGray">
              <p className='noBottomMargin'>{t('type')}</p>
              <p className='noBottomMargin'>{this.state.type}</p>
            </Grid>
            <Grid item className="text-center col-md-4 borderGray">
              <p className='noBottomMargin'>{t('blockReward')}</p>
              <p className='noBottomMargin'>{this.state.reward}</p>
            </Grid>
            <Grid item className="text-center col-md-4 borderGray">
              <p className='noBottomMargin'>{t('supply')}</p>
              <p className='noBottomMargin'>{this.state.moneySupply}</p>
            </Grid>
            <Grid item className="text-center col-md-4 borderGray">
              <p className='noBottomMargin'>{t('price')}</p>
              <p className='noBottomMargin'>${this.state.price}</p>
            </Grid>
          </Grid>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.error,
  chaininfo: state.chaininfo.items,
  loading: state.chaininfo.loading,
  error: state.chaininfo.error
});

export default connect(mapStateToProps)(withTranslation()(ChainInfo));
