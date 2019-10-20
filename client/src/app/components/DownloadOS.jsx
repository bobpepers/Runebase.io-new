import React, { Component } from 'react';
import * as actions from '../actions/auth';
import { connect } from 'react-redux';
import Platform from 'react-platform-js'
import Button from '@material-ui/core/Button';

class DownloadOS extends Component {
  constructor(props) {
    super(props);
  }
  renderDownloadLink(Platform) {
    switch(true) {
      case !!Platform.match(/Linux/):
        return 'https://downloads.runebase.io/runebase-0.17.5-x86_64-linux-gnu.tar.gz';
        break;
      case !!Platform.match(/Win64/):
        return 'https://downloads.runebase.io/runebase-0.17.5-win64-setup.exe';
        break;
      case !!Platform.match(/Win32/):
        return 'https://downloads.runebase.io/runebase-0.17.5-win32-setup.exe';
        break;
      case !!Platform.match(/Osx/):
        return 'https://downloads.runebase.io/runebase-0.17.5-osx.dmg';
        break;
      case !!Platform.match(/Android/):
        return 'https://play.google.com/store/apps/details?id=org.runebase.wallet';
        break;
      case !!Platform.match(/iPad/):
        return 'Source';
        break;
      case !!Platform.match(/iPhone/):
        return 'Source';
        break;
      default:
        return 'source link';
    }
  }
  renderDownloadName(Platform) {
    switch(true) {
      case !!Platform.match(/Linux/):
        return 'runebase-0.17.5-x86_64-linux-gnu.tar.gz';
        break;
      case !!Platform.match(/Win64/):
        return 'runebase-0.17.5-win64-setup.exe';
        break;
      case !!Platform.match(/Win32/):
        return 'runebase-0.17.5-win32-setup.exe';
        break;
      case !!Platform.match(/Osx/):
        return 'runebase-0.17.5-osx.dmg';
        break;
      case !!Platform.match(/Android/):
        return 'Runebase Wallet';
        break;
      case !!Platform.match(/iPad/):
        return 'Source';
        break;
      case !!Platform.match(/iPhone/):
        return 'Source';
        break;
      default:
        return 'Unknown Platform';
    }
  }

  render() {

    return (
      <div className="form-container">
        <Button variant="contained" color="primary" href={this.renderDownloadLink(Platform.OS)}>{this.renderDownloadName(Platform.OS)}</Button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


export default connect(mapStateToProps, actions)(DownloadOS);
