import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Tabs, Tab, Nav } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import ScrollableSection, { configureAnchors } from 'react-update-url-on-scroll';
import theme from '../theme';
configureAnchors({scrollOnImagesLoad: true});

class Download extends Component{
  constructor(props) {
    super(props);
  }

  render(){
        const { t } = this.props;
        return (

            <div id='guides'>
              <Grid container className={`text-center`}>
                <Grid item xs={12} className={`mt-${theme.spacing.section}`}>
                  <h3 className="textBorder w-100 text-center">{t('guides')}</h3>
                </Grid>
                <div className="underline mx-auto"></div>
                <Tab.Container defaultActiveKey="Desktop">
                  <Grid container justify="center">
                    <ScrollableSection hash={'install'}>
                      <Grid  item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src="/static/images/guides/install.png" alt="Runebase Install Guide Windows" />
                      </Grid>
                    </ScrollableSection>
                    <ScrollableSection hash={'backup'}>
                      <Grid  item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src="/static/images/guides/backup.png" alt="Runebase Backup Guide Windows" />
                      </Grid>
                    </ScrollableSection>
                    <ScrollableSection hash={'encrypt'}>
                      <Grid  item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src="/static/images/guides/encrypt.png" alt="Runebase Encrypt Guide Windows" />
                      </Grid>
                    </ScrollableSection>
                    <ScrollableSection hash={'restore'}>
                      <Grid  item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src="/static/images/guides/restore.png" alt="Runebase Restore Guide Windows" />
                      </Grid>
                    </ScrollableSection>
                    <ScrollableSection hash={'stake'}>
                      <Grid  item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src="/static/images/guides/stake.png" alt="Runebase Stake Guide Windows" />
                      </Grid>
                    </ScrollableSection>
                  </Grid>
                </Tab.Container>
              </Grid>
            </div>

        );
    };

}

export default withTranslation()(Download);