import React, { Component } from 'react';
import * as actions from '../actions/auth';
import { connect } from 'react-redux';

class Radio extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className="form-container">
        <h1>Radio</h1>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


export default connect(mapStateToProps, actions)(Radio);
