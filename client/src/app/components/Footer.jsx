import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { withTranslation, useTranslation } from 'react-i18next';

import theme from '../theme';

class Footer extends Component {

        componentDidMount () {
            const script = document.createElement("script");

            script.src = "/static/particle.js";
            script.async = true;

            document.body.appendChild(script);
        }
render() {
    const { t } = this.props;
  return (
    <Grid container style={{position: 'absolute', zIndex: '99999', width: '100%', height: '55%'}} className={`text-center`} direction="row" justify="center" alignItems="stretch">
        <canvas id='particlewave' style={{position: 'absolute', display: 'block', width: '100%', height: '100%'}}>
        </canvas>
        <Grid container id='pariclewaveHeight' style={{position: 'absolute', zIndex: '99999', width: '100%', height: '100%'}} className={`pt-${theme.spacing.section}`}>
                <Grid item xs={3}>
                	<h2>{t('documentation')}</h2>
                	<ul>
                		<li>
                			<a href="https://github.com/Runebase/runebase/wiki/Staking">{t('howToStake')}</a>
                		</li>
                		<li>
                			<a href="https://github.com/Runebase/runebase/wiki/rrc223">{t('rrc223Token')}</a>
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
                			<a href="https://downloads.runebase.io/paper.pdf">{t('projectInfo')}</a>
                		</li>
                	</ul>
                </Grid>
                <Grid item xs={3}>
                	<h2>{t('channels')}</h2>
                	<ul>
                		<li>
                            <a href="https://discord.gg/hYhZB9m">Discord</a>
                		</li>
                		<li>
                            <a href="https://www.medium.com/@runebase">Medium</a>
                		</li>
                        <li>
                            <a href="https://www.facebook.com/runebaseofficial">Facebook</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Runebase_Tweet">Twitter</a>
                        </li>
                        <li>
                            <a href="https://t.me/joinchat/KBGO3QwuMu-QTJKgPQjHmg">Telegram Official</a>
                        </li>
                        <li>
                            <a href="https://t.me/joinchat/IPVfFlPX-ieSK1QxfNc4Jw">Telegram Brazil</a>
                        </li>
                	</ul>
                </Grid>
                <Grid item xs={3}>
                	<h2>{t('exchanges')}</h2>
                	<ul>
                		<li>
                            <a href="https://altmarkets.io/">Altmarkets.io</a>
                        </li>
                		<li>
                            <a href="https://txbit.io/Trade/RUNES/BTC">Txbit.io</a>
                        </li>
                	</ul>
                </Grid>
                <Grid item xs={3}>
                	<h2>{t('ranking')}</h2>
                	<ul>
                		<li>
                            <a href="https://coinpaprika.com/coin/runes-runebase/">Coinpaprika</a>
                        </li>
                		<li>
                            <a href="https://www.coingecko.com/en/coins/runebase/">Coingecko</a>
                        </li>
                	</ul>
                </Grid>
                <Grid item xs={3}>
                	<h2>{t('pools')}</h2>
                	<ul>
                		<li>
                            <a href="https://staking.world/">Staking.world</a>
                        </li>
                		<li>
                            <a href="https://www.4stake.com/">4stake.com</a>
                        </li>
                	</ul>
                </Grid>
                <Grid item xs={3}>
                	<h2>{t('contact')}</h2>
                	<ul>
                		<li>
                            <a href="mailto:support@runebase.io">support@runebase.io</a>
                        </li>
                	</ul>
                </Grid>
            </Grid>
    </Grid>
  )
}
};

export default withTranslation()(Footer);