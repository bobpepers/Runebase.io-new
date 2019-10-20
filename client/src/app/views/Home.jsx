import React, { Component } from 'react';
import * as actions from '../actions/auth';
import { connect } from 'react-redux';
import Team from '../components/Team';
import WorkSection from '../components/WorkSection';
import ProductSection from '../components/ProductSection';
import DownloadOS from '../components/DownloadOS';
import ParticlesRunebase from '../components/ParticlesRunebase';
import Community from '../components/Community';
import Exchanges from '../components/Exchanges';
import Pools from '../components/Pools';
import Download from '../components/Download';

import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <h1>sdf</h1>
        <ParticlesRunebase />
        <DownloadOS />
        <Download />
        <ProductSection />
        <Exchanges />
        <Pools />
        <Community />
        <Team />
        <WorkSection />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


export default connect(mapStateToProps, actions)(Home);
