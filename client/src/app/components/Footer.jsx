import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

function Footer() {
  return (
    <Grid container>
        <Grid item xs={3}>
        	<h2>Documentation</h2>
        	<ul>
        		<li>
        			<a href="https://github.com/Runebase/runebase/wiki/Staking">How to Stake?</a>
        		</li>
        		<li>
        			<a href="https://github.com/Runebase/runebase/wiki/rrc223">Create RRC223 Token</a>
        		</li>
        	</ul>
        </Grid>
        <Grid item xs={3}>
        	<h2>Resources</h2>
        	<ul>
        		<li>
        			<a href="https://github.com/runebase">Github</a>
        		</li>
        		<li>
        			<a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
        		</li>
        	</ul>
        </Grid>
        <Grid item xs={3}>
        	<h2>Channels</h2>
        	<ul>
        		<li>

        		</li>
        		<li>

        		</li>
        	</ul>
        </Grid>
        <Grid item xs={3}>
        	<h2>Exchanges</h2>
        	<ul>
        		<li>

        		</li>
        		<li>

        		</li>
        	</ul>
        </Grid>
        <Grid item xs={3}>
        	<h2>Ranking</h2>
        	<ul>
        		<li>

        		</li>
        		<li>

        		</li>
        	</ul>
        </Grid>
        <Grid item xs={3}>
        	<h2>Pools</h2>
        	<ul>
        		<li>

        		</li>
        		<li>

        		</li>
        	</ul>
        </Grid>
        <Grid item xs={3}>
        	<h2>Contact</h2>
        	<ul>
        		<li>

        		</li>
        		<li>

        		</li>
        	</ul>
        </Grid>
    </Grid>
  )
};

export default Footer;