import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import * as actions from '../actions/auth';
import { connect } from 'react-redux';

class Wallet extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <Helmet>
          <script src="/static/js/vuetify.min.js" crossorigin="anonymous" />
          <script src="/static/js/wallet.js" type="text/javascript" />
          <link rel="stylesheet" type="text/css" href="/static/css/vuetify.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/material-icons.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
        </Helmet>
        <div id='app'>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


export default connect(mapStateToProps, actions)(Wallet);
