import React, { Component } from 'react';
import * as actions from '../actions/auth';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

export default class Roadmap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id='roadmap'>
            <Grid container className='roadmap'>
                <h3 className="textBorder w-100 text-center">Roadmap</h3>
                <div className="underline mx-auto mb-5"></div>

                <ul className="timeline">
                    <li>
                        <div className="timeline-badge">
                            <a>
                                <i className="fa fa-circle"></i>
                            </a>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2018</h4>
                            </div>
                            <div className="timeline-body">
                                <p>Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.</p>
                            </div>
                            <div className="timeline-footer">
                                <p className="text-right">2018</p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-badge">
                            <a><i className="fa fa-circle invert"></i></a>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2019</h4>
                            </div>
                            <div className="timeline-body">
                                <p>Stranguillione in deinde cepit roseo commendavit patris super color est se sed. Virginis plus plorantes abscederem assignato ipsum ait regem Ardalio nos filiae Hellenicus mihi cum. Theophilo litore in lucem in modo invenit quasi nomen magni ergo est se est Apollonius, habet clementiae venit ad nomine sed dominum depressit filia navem.</p>
                            </div>
                            <div className="timeline-footer">
                                <p className="text-right">2019</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge">
                            <a><i className="fa fa-circle"></i></a>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2020</h4>
                            </div>
                            <div className="timeline-body">
                                <p>Advenientibus aliorum eam ad per te sed. Facere debetur aut veneris accedens.</p>
                            </div>
                            <div className="timeline-footer">
                                <p className="text-right">2020</p>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-badge">
                            <a><i className="fa fa-circle invert"></i></a>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2021</h4>
                            </div>
                            <div className="timeline-body">
                                <p>Volvitur ingreditur id ait mea vero cum autem quod ait Cumque ego illum vero cum unde beata. Commendavi si non dum est in. Dionysiadem tuos ratio puella ut casus, tunc lacrimas effunditis magister cives Tharsis. Puellae addita verbaque' capellam sanctissima quid, apollinem existimas filiam rex cum autem quod tamen adnuente rediens eam est se in. Peracta licet ad nomine Maria non ait in modo compungi mulierem volutpat.</p>
                            </div>
                            <div className="timeline-footer">
                                <p className="text-right">2021</p>
                            </div>
                        </div>
                    </li>
                    <li className="clearfix no-float"></li>
                </ul>
            </Grid>
        </div>
    )
  }
}

