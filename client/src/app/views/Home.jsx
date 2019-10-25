import React, { Component } from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import {withRouter} from 'react-router-dom';
import * as actions from '../actions/auth';
import { connect } from 'react-redux';
import Team from '../components/Team';
import WorkSection from '../components/WorkSection';
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

  render() {
    return (
      <div>
        <ScrollableSection hash={'info'} ref={this.myRef}>
          <ParticlesRunebase />
          <ChainInfo />
        </ScrollableSection>
        <ScrollableSection hash={'wallets'} ref={this.myRef}>
          <Download />
        </ScrollableSection>
        <ScrollableSection hash={'product'} ref={this.myRef}>
          <Product />
        </ScrollableSection>
        <ScrollableSection hash={'exchanges'} ref={this.myRef}>
          <Exchanges />
        </ScrollableSection>
        <ScrollableSection hash={'pools'} ref={this.myRef}>
          <Pools />
        </ScrollableSection>
        <ScrollableSection hash={'community'} ref={this.myRef}>
          <Community />
        </ScrollableSection>
        <ScrollableSection hash={'team'} ref={this.myRef}>
          <Team />
        </ScrollableSection>
        <ScrollableSection hash={'roadmap'} ref={this.myRef}>
          <Roadmap />
        </ScrollableSection>
        <ScrollableSection hash={'work'} ref={this.myRef}>
          <WorkSection />
        </ScrollableSection>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


export default withRouter(connect(mapStateToProps, actions)(Home));
