import React, { Component } from 'react';
import Particles from 'react-particles-js';
import DownloadOS from './DownloadOS';
import Mountain from '../assets/images/Mountain.png';


export default class ParticlesRunebase extends Component{
    componentDidMount () {
        window.VANTA.CLOUDS({
          el: "#clouds",
          skyColor: 0x70a0c,
          cloudColor: 0x2f4d7a,
          sunColor: 0xae7e42,
          sunlightColor: 0x4f2e0e
        })


    }

    render(){
        return (
            <section id='topsection' className="top">
            	<div className="position-relative">
                    <div id="foglayer_01" class="fog zIndex-3">
                      <div class="image01"></div>
                      <div class="image02"></div>
                    </div>
                    <div id="foglayer_02" class="fog zIndex-3">
                      <div class="image01"></div>
                      <div class="image02"></div>
                    </div>
                    <div id="foglayer_03" class="fog zIndex-3">
                      <div class="image01"></div>
                      <div class="image02"></div>
                    </div>
                    <div id='clouds'>
                    </div>
            		<div id="particles-js">
                		<img className="nopointer position-absolute bot-0" src={Mountain} alt="" />
                		<Particles
                          params={{
                                particles: {
                                    line_linked: {
                                        shadow: {
                                            enable: true,
                                            color: "#3CA9D1",
                                            blur: 5
                                        }
                                    }
                                }
                            }}
                          style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgb(15, 7, 8)',
                          }}
                        />
                	</div>

                	<div className="main_top_area shadow-w nopointer position-absolute row justify-content-center .zIndex-4">
                        <div className="position-relative align-self-center">
                            <h3 className="position-relative">Runebase</h3>
                            <p className="position-relative">Smart-Contract Platform</p>
                            <DownloadOS />
                            <div className="single_slider pt-3 w-100 my-auto">
                                <a className="button1 showpointer" href="https://downloads.runebase.io/paper.pdf">
                                    Project Info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

}
