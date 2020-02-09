import React, { Component } from 'react';
import * as actions from '../actions/auth';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import ScrollableSection from 'react-update-url-on-scroll';

class Roadmap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props;
    return (
        <ScrollableSection hash={'roadmap'}>
        <div id='roadmap' className='backgroundRoadmap'>
            <Grid container className='roadmap'>
                <h3 className="textBorder w-100 text-center">{t('roadmap')}</h3>
                <div className="underline mx-auto mb-5"></div>

                <ul className="timeline w-100">
                    <li>
                        <div className="timeline-badge textBorder">
                            <a>
                                <i className="fa fa-circle"></i>
                            </a>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2018</h4>
                            </div>
                            <div className="timeline-body">
                                    <p className="timeline__day-sum">{t('roadmap1')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                    <p className="timeline__day-sum">{t('roadmap2')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                    <p className="timeline__day-sum">{t('roadmap3')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                    <p className="timeline__day-sum">{t('roadmap4')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                    <p className="timeline__day-sum">{t('roadmap5')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                               </div>
                            <div className="timeline-footer">
                                <p className="text-right">2018</p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-badge textBorder">
                            <a><i className="fa fa-circle invert"></i></a>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2019</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="timeline__day-sum">{t('roadmap6')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                {/* <p class="timeline__day-sum">{t('roadmap7')}<i class="fas fa-check fa-lg ml-2 text-success"></i></p>
                                <p class="timeline__day-sum">{t('roadmap8')}<i class="fas fa-check fa-lg ml-2 text-success"></i></p> */}
                                <p className="timeline__day-sum">{t('roadmap9')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                <p className="timeline__day-sum">{t('roadmap10')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                <p className="timeline__day-sum">{t('roadmap11')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                <p className="timeline__day-sum">{t('roadmap12')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                <p className="timeline__day-sum">{t('roadmap14')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                <p className="timeline__day-sum">{t('roadmap19')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                <p className="timeline__day-sum">{t('roadmap20')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                <p className="timeline__day-sum">{t('roadmap21')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                            </div>
                            <div className="timeline-footer">
                                <p className="text-right">2019</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge textBorder">
                            <a><i className="fa fa-circle"></i></a>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2020</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="timeline__day-sum">{t('roadmap18')}</p>
                                <p className="timeline__day-sum">{t('roadmap24')}<i className="fas fa-check fa-lg ml-2 text-success"></i></p>
                                <p className="timeline__day-sum">{t('roadmap25')}</p>
                                <p className="timeline__day-sum">{t('roadmap13')}</p>
                                <p className="timeline__day-sum">{t('roadmap17')}</p>
                                <p className="timeline__day-sum">{t('roadmap22')}</p>
                                <p className="timeline__day-sum">{t('roadmap23')}</p>
                            </div>
                            <div className="timeline-footer">
                                <p className="text-right">2020</p>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-badge textBorder">
                            <a><i className="fa fa-circle invert"></i></a>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2021</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="timeline__day-sum">{t('roadmap22')}</p>
                                <p className="timeline__day-sum">{t('roadmap23')}</p>
                            </div>
                            <div className="timeline-footer">
                                <p className="text-right">2021</p>
                            </div>
                        </div>
                    </li>
                    <li className="clearfix no-float"></li>
                </ul>
            </Grid>
            <Grid container>
            <div className='mx-auto textBorder'><p>{t('revisionNotice')}</p></div>
            </Grid>
        </div>
        </ScrollableSection>
    )
  }
}

export default withTranslation()(Roadmap);