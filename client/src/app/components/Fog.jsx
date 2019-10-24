import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import theme from '../theme'

 export default class Fog extends Component{
    constructor(props) {
        super(props)
        const element = React.createRef();
    }
    componentDidMount() {
        window.VANTA.NET({
          el: "#fog",
        });
      }

    render(){
        return (
            <Grid container id='fog' ref='fog' className={`mt-${theme.spacing.section} mb-${theme.spacing.section}`}>
                <div>
                    <p>sqdsqdqsdsqd</p>
                </div>
                <script src="../assets/js/three/three.min.js"></script>
            </Grid>
        );
    };

}
