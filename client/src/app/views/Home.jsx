import React, { Component } from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import {withRouter} from 'react-router-dom';
import * as actions from '../actions/auth';
import { connect } from 'react-redux';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Product from '../components/Product';
import ParticlesRunebase from '../components/ParticlesRunebase';
import Community from '../components/Community';
import Exchanges from '../components/Exchanges';
import Pools from '../components/Pools';
import Download from '../components/Download';
import ChainInfo from '../components/ChainInfo';
import Roadmap from '../components/Roadmap';

import './Home.scss';

class Home extends Component {
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
          <ParticlesRunebase />
          <ChainInfo />
          <Download />
          <Product />
          <Exchanges />
          <Pools />
          <Community />
          <Team />
          <Roadmap />
          <Contact />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


export default withRouter(connect(mapStateToProps, actions)(Home));
