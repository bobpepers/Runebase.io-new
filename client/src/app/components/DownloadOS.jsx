import React, { Component } from 'react';
import * as actions from '../actions/auth';
import { connect } from 'react-redux';
import Platform from 'react-platform-js'
import Button from '@material-ui/core/Button';

class DownloadOS extends Component {
  constructor(props) {
    super(props);
    this.version="0.18.1"
  }

  renderDownloadLink(Platform, CPU) {
    switch(true) {
      case !!Platform.match(/Linux/):
        return `https://downloads.runebase.io/runebase-${this.version}-x86_64-linux-gnu.tar.gz`;
        break;
      case !!Platform.match(/Windows/) && !!CPU.match(/64/):
        return `https://downloads.runebase.io/runebase-${this.version}-win64-setup.exe`;
        break;
      case !!Platform.match(/Windows/) && !!CPU.match(/32/):
        return `https://downloads.runebase.io/runebase-${this.version}-win32-setup.exe`;
        break;
      case !!Platform.match(/Osx/):
        return `https://downloads.runebase.io/runebase-${this.version}-osx.dmg`;
        break;
      case !!Platform.match(/Android/):
        return `https://play.google.com/store/apps/details?id=org.runebase.wallet`;
        break;
      case !!Platform.match(/iPad/):
        return `Source`;
        break;
      case !!Platform.match(/iPhone/):
        return `Source`;
        break;
      default:
        return 'source link';
    }
  }
  renderDownloadName(Platform, CPU) {
    switch(true) {
      case !!Platform.match(/Linux/):
        return `runebase-${this.version}-x86_64-linux-gnu.tar.gz`;
        break;
      case !!Platform.match(/Windows/) && !!CPU.match(/64/):
        return `runebase-${this.version}-win64-setup.exe`;
        break;
      case !!Platform.match(/Windows/) && !!CPU.match(/32/):
        return `runebase-${this.version}-win32-setup.exe`;
        break;
      case !!Platform.match(/Mac OS/):
        return `runebase-${this.version}-osx.dmg`;
        break;
      case !!Platform.match(/Android/):
        return `Runebase Wallet`;
        break;
      case !!Platform.match(/iPad/):
        return `Source`;
        break;
      case !!Platform.match(/iPhone/):
        return `Source`;
        break;
      default:
        return `Unknown Platform`;
    }
  }

  render() {
    console.log(Platform.OS);
    console.log(Platform.OSVersion);
    console.log(Platform.CPU);
    return (
      <div className="single_slider pt-3 w-100 my-auto">
        <a className='button1 showpointer' href={this.renderDownloadLink(Platform.OS, Platform.CPU)}>{this.renderDownloadName(Platform.OS, Platform.CPU)}</a>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


export default connect(mapStateToProps, actions)(DownloadOS);
