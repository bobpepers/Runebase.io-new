import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Tabs, Tab, Nav } from 'react-bootstrap';
import theme from '../theme'
import {RUNEBASE_VERSION} from '../config';

export default class Download extends Component{
  constructor(props) {
    super(props)
  }

    render(){
        return (
          <Grid container id='wallets' className={`downloadBG text-center`}>
            <Grid item xs={12} className={`mt-${theme.spacing.section}`}>
              <h3 className="textBorder w-100 text-center">Choose your Runebase Wallet</h3>
            </Grid>
            <div className="underline mx-auto"></div>
            <Tab.Container defaultActiveKey="Desktop">
              <Grid container>
                <Grid item xs={12} className={`mt-${theme.spacing.marginTopItem}`}>
                  <Nav className="flex-row d-flex justify-content-center">
                    <Nav.Item className="text-center col-xs-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <Nav.Link className='textBorder button1' eventKey="Desktop">Desktop</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="text-center col-xs-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <Nav.Link className='textBorder button1' eventKey="Mobile">Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="text-center col-xs-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <Nav.Link className='textBorder button1' eventKey="Web">Web</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Grid>
                <Grid  item xs={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="Desktop">
                      <Grid container className='text-center' direction="row" justify="center" alignItems="stretch">
                        <Grid item xs={12} className='d-flex'>
                          <h3 className={`mx-auto textBorder mt-${theme.spacing.marginTopItem}`}>Desktop</h3>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
                          <div className="col-md-12">
                            <i className="fab fa-windows brand-icon-size"></i>
                            <h3 className='w-100 textBorder'>Windows</h3>
                            <a className="w-100 button1" href={`https://downloads.runebase.io/runebase-${RUNEBASE_VERSION}-win64-setup.exe`}>
                              64bit.exe
                            </a>
                            <a className="w-100 button1" href={`https://downloads.runebase.io/runebase-0.17.5-win64.zip`}>
                              64bit.zip
                            </a>
                            <a className="w-100 button1" href={`https://downloads.runebase.io/runebase-${RUNEBASE_VERSION}-win32-setup.exe`}>
                              32bit.exe
                            </a>
                            <a className="w-100 button1" href={`https://downloads.runebase.io/runebase-${RUNEBASE_VERSION}-win32.zip`}>
                              32bit.zip
                            </a>
                          </div>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
                          <div className="col-md-12">
                            <i className="fab fa-apple brand-icon-size"></i>
                            <h3 className='w-100 textBorder'>Mac OS</h3>
                            <a className="w-100 button1" href={`https://downloads.runebase.io/runebase-${RUNEBASE_VERSION}-osx.dmg`}>
                              osx.dmg
                            </a>
                            <a className="w-100 button1" href={`https://downloads.runebase.io/runebase-${RUNEBASE_VERSION}-osx.tar.gz`}>
                              osx.tar.gz
                            </a>
                            <a className="w-100 button1" href={`https://downloads.runebase.io/runebase-${RUNEBASE_VERSION}-osx64.tar.gz`}>
                              osx64.tar.gz
                            </a>
                            <a className="w-100 button1" href="https://github.com/runebase/runebase">
                              Core
                            </a>
                          </div>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
                          <div className="col-md-12">
                            <i className="fab fa-linux brand-icon-size"></i>
                            <h3 className='w-100 textBorder'>Linux</h3>
                            <a className="w-100 button1" href={`https://downloads.runebase.io/runebase-${RUNEBASE_VERSION}-x86_64-linux-gnu.tar.gz`}>
                              x86_64.tar.gz
                            </a>
                            <a className="w-100 button1" href={`https://downloads.runebase.io/runebase-${RUNEBASE_VERSION}-i686-pc-linux-gnu.tar.gz`}>
                              i686.tar.gz
                            </a>
                            <a className="w-100 button1" href={`https://downloads.runebase.io/runebase-${RUNEBASE_VERSION}-arm-linux-gnueabihf.tar.gz`}>
                              arm.tar.gz
                            </a>
                            <a className="w-100 button1" href={`https://downloads.runebase.io/runebase-${RUNEBASE_VERSION}-aarch64-linux-gnu.tar.gz`}>
                              aarch64.tar.gz
                            </a>
                          </div>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
                          <div className="col-md-12">
                            <i className="fab fa-chrome brand-icon-size"></i>
                            <h3 className='w-100 textBorder'>Google Chrome</h3>
                            <a className="w-100 button1" href="https://chrome.google.com/webstore/detail/runebasechrome/gnfdbibmnlkehibhabjohlbiehhbhkhd">
                              osx.dmg
                            </a>
                          </div>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} className={`mt-${theme.spacing.marginTopItem}`}>
                          <div className="col-md-12">
                            <i className="fab fa-github brand-icon-size"></i>
                            <h3 className='w-100 textBorder'>Source</h3>
                            <a className="w-100 button1" href="">
                              Core
                            </a>
                            <a className="w-100 button1" href="">
                              RunebaseChrome
                            </a>
                            <a className="w-100 button1" href="">
                              WebWallet
                            </a>
                          </div>
                        </Grid>
                      </Grid>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Mobile">
                      <Grid container className='text-center' direction="row" justify="center" alignItems="stretch">
                        <Grid item xs={12} className='d-flex'>
                          <h3 className={`mx-auto textBorder mt-${theme.spacing.marginTopItem}`}>Mobile</h3>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} className='mt-5'>
                          <div className="col-md-12">
                            <i className="fab fa-android brand-icon-size"></i>
                            <h3 className='w-100 textBorder'>Android</h3>
                            <a className="w-100 button1" href='https://play.google.com/store/apps/details?id=org.runebase.wallet'>
                              Google Play
                            </a>
                          </div>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} className='mt-5'>
                          <div className="col-md-12">
                            <i className="fab fa-apple brand-icon-size"></i>
                            <h3 className='w-100 textBorder'>IOS</h3>
                            <a className="w-100 button1" href="#">
                              Not Available
                            </a>
                          </div>
                        </Grid>
                      </Grid>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Web">
                      <Grid container className='text-center' direction="row" justify="center" alignItems="stretch">
                        <Grid item xs={12} className='d-flex'>
                          <h3 className={`mx-auto textBorder mt-${theme.spacing.marginTopItem}`}>Web</h3>
                        </Grid>
                      </Grid>
                    </Tab.Pane>
                  </Tab.Content>
                </Grid>
              </Grid>
            </Tab.Container>
          </Grid>
        );
    };

}
