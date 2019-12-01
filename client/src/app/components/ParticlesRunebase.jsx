import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { withTranslation } from 'react-i18next';
import ScrollableSection from 'react-update-url-on-scroll';
import DownloadOS from './DownloadOS';
import Mountain from '../assets/images/Mountain.png';
import Clouds from '../assets/images/Clouds.png';
import Particles from 'react-particles-js';
//import { Clouds } from './Clouds';


class ParticlesRunebase extends Component{
    constructor(props){
      super(props);

    }

    render(){
        const { t } = this.props;
        return (
            <ScrollableSection hash={'info'} ref={this.myRef}>
                <div id='info' style={{position: 'relative'}}>
                    <section className="top">

                        <div className="foggy">
                        </div>
                        <div className='sliderbg'>
                        </div>
                        <div className='clouds'>
                        </div>
                        <div className='particles'>
                            <Particles
    params={{
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "line_linked": {
                "enable": true,
                "opacity": 0.02
            },
            "move": {
                "direction": "right",
                "speed": 0.05
            },
            "size": {
                "value": 1
            },
            "opacity": {
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.05
                }
            }
        },
        "interactivity": {
            "events": {
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            },
            "modes": {
                "push": {
                    "particles_nb": 1
                }
            }
        },
        "retina_detect": true
    }} />
                        </div>
                        <div style={{zIndex: 2, position: 'absolute', top: '0', bottom: '0', width: '100%', height: '100%'}}>
        <Particles
        style={{
            zIndex: 2,
                position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
              }}
    params={{
        "particles": {
            "number": {
                "value": 25,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 15,
                "random": true,
                "anim": {
                    "speed": 3,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 0.6,
                "direction": "top",
                "out_mode": "out"
            },
            "shape": {
                "type": [
                    "images"
                ],
                "images": [
                    {
                        "src": "/static/images/runebase.png",
                        "height": 50,
                        "width": 50
                    },
                ]
            },
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 1,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
            }
        }
    }} />
    </div>

                    	<div className="position-relative">
                              {/*<Clouds />*/}
                    		<div id="particles-js">
                        		<img className="nopointer position-absolute bot-0 mountain" src={Mountain} alt="" />

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
                </div>
            </ScrollableSection>
        );
    };

}

export default withTranslation()(ParticlesRunebase);