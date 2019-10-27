import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { withTranslation, useTranslation } from 'react-i18next';

import theme from '../theme';

function Footer() {
        const { t, i18n } = useTranslation();
  return (
    <Grid container style={{position: 'absolute', zIndex: '99999', width: '100%', height: '55%'}} className={`text-center`} direction="row" justify="center" alignItems="stretch">
        <canvas id='particlewave' style={{position: 'absolute', display: 'block', width: '100%', height: '100%'}}>
        </canvas>
        <Grid container id='pariclewaveHeight' style={{position: 'absolute', zIndex: '99999', width: '100%', height: '100%'}} className={`pt-${theme.spacing.section}`}>
                <Grid item xs={3}>
                	<h2>{t('documentation')}</h2>
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
                	<h2>{t('resources')}</h2>
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
                	<h2>{t('channels')}</h2>
                	<ul>
                		<li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                		</li>
                		<li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                		</li>
                        <li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                        </li>
                        <li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                        </li>
                        <li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                        </li>
                        <li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                        </li>
                	</ul>
                </Grid>
                <Grid item xs={3}>
                	<h2>{t('exchanges')}</h2>
                	<ul>
                		<li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                        </li>
                		<li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                        </li>
                	</ul>
                </Grid>
                <Grid item xs={3}>
                	<h2>{t('ranking')}</h2>
                	<ul>
                		<li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                        </li>
                		<li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                        </li>
                	</ul>
                </Grid>
                <Grid item xs={3}>
                	<h2>{t('pools')}</h2>
                	<ul>
                		<li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                        </li>
                		<li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                        </li>
                	</ul>
                </Grid>
                <Grid item xs={3}>
                	<h2>{t('contact')}</h2>
                	<ul>
                		<li>
                            <a href="https://downloads.runebase.io/paper.pdf">Project Info</a>
                        </li>
                	</ul>
                </Grid>
            </Grid>
    </Grid>
  )
};

export default withTranslation()(Footer);