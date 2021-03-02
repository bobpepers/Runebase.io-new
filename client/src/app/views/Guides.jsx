import React, { Component } from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import {withRouter} from 'react-router-dom';
import * as actions from '../actions/auth';
import { connect } from 'react-redux';
import Guides from '../components/Guides';

import './Exchange.scss';

class Exchange extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount(){
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div>
        <Guides />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


export default withRouter(connect(mapStateToProps, actions)(Exchange));
