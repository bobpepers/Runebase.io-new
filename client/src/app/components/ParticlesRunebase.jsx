import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withTranslation } from 'react-i18next';
import ScrollableSection from 'react-update-url-on-scroll';
import DownloadOS from './DownloadOS';
import Mountain from '../assets/images/Mountain.png';
import { Clouds } from './Clouds';


class ParticlesRunebase extends Component{
    constructor(props){
      super(props);

    }

    render(){
        const { t } = this.props;
        return (
            <ScrollableSection hash={'info'} ref={this.myRef}>
            <section className="top">

                <div className="foggy">

                </div>

            	<div className="position-relative">
                      <Clouds />
            		<div id="particles-js">
                		<img className="nopointer position-absolute bot-0" src={Mountain} alt="" />

                	</div>

                	<div className="main_top_area shadow-w nopointer position-absolute row justify-content-center">
                        <div className="position-relative align-self-center osdlwrapper">
                            <h3 className="position-relative">Runebase</h3>
                            <p className="position-relative">{t('smartPlatform')}</p>
                            <DownloadOS />
                            <div className="single_slider pt-3 w-100 my-auto">
                                <a className="button1 showpointer" href="https://downloads.runebase.io/paper.pdf">
                                    {t('projectInfo')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </ScrollableSection>
        );
    };

}

export default withTranslation()(ParticlesRunebase);