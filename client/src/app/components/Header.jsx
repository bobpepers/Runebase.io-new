import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavHashLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
  constructor(props) {
      super(props);
      this.state = {
        menu: false,
        height: 0,
        prevHash: '',
        currentHash: '',
        chainInfo: false,
      };
      this.toggleMenu = this.toggleMenu.bind(this);
      this.updateHeight = this.updateHeight.bind(this);
      this.detectHashChange = this.detectHashChange.bind(this);
    }

    toggleMenu(){
      this.setState({ menu: !this.state.menu });
    }
    componentDidMount() {
       this.updateHeight();
       window.addEventListener("resize", this.updateHeight);
       window.addEventListener("scroll", this.detectHashChange);
     }

     componentWillUnmount() {
       window.removeEventListener("resize", this.updateHeight);
       window.removeEventListener("scroll", this.detectHashChange);
     }

     componentDidUpdate() {
      this.updateHeight();
      this.detectHashChange();
     }

     updateHeight() {
       if (this.state.height != this.div.clientHeight)
         this.setState({ height: this.div.clientHeight })
     }
     detectHashChange() {
      this.state.currentHash = window.location.hash.substring(1);

      if (this.state.currentHash == '') {
        //console.log('sip');
        return;
      } else {
        //console.log(this.state.currentHash);
        if(this.state.currentHash !== '' && this.state.currentHash !== this.state.prevHash){
          this.setState({currentHash: this.state.currentHash});
          this.state.prevHash = this.state.currentHash;
        }
      }
     }


  render() {
    const show = (this.state.menu) ? "show" : "" ;
    const { t, i18n } = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';
    const countryCode = (country) => {
      if (country == 'pt') {
        return 'br';
      }
      if (country == 'en') {
        return 'us';
      }
      if (country == 'nl') {
        return 'nl';
      }

    }
    return (
      <header style={{height: this.state.height}}>
          <Navbar ref={ div => { this.div = div; } } fixed='top' className="navbar navbar-default" bg="light" expand="lg">
            <Link to={this.props.authenticated ? '/' : '/'} className="navbar-brand">Runebase</Link>
            <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
              <span className="navbar-toggler-icon"></span>
            </button>
            <Navbar.Collapse id="basic-navbar-nav" className={"collapse navbar-collapse " + show}>
              <Nav className="mr-auto">
                <NavDropdown title={t('home')} id="basic-nav-dropdown">

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'info' ? "active" : "NotActive"}`} smooth to="/#info"  onClick={ this.toggleMenu } scroll={el => { window.location.hash = '#info'; const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = 40; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      {t('info')}
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'wallets' ? "active" : "NotActive"}`} smooth to="/#wallets"  onClick={ this.toggleMenu } scroll={el => { window.location.hash = '#wallets'; const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = 40; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      {t('wallets')}
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'product' ? "active" : "NotActive"}`} smooth to="/#product"  onClick={ this.toggleMenu } scroll={el => { window.location.hash = '#product'; const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = 40; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      {t('product')}
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'exchanges' ? "active" : "NotActive"}`} smooth to="/#exchanges"  onClick={ this.toggleMenu } scroll={el => { window.location.hash = '#exchanges'; const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = 40; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      {t('exchanges')}
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'pools' ? "active" : "NotActive"}`} smooth to="/#pools"  onClick={ this.toggleMenu } scroll={el => { const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = -50; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      {t('pools')}
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'community' ? "active" : "NotActive"}`} smooth to="/#community"  onClick={ this.toggleMenu } scroll={el => { window.location.hash = '#community'; const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = 40; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      {t('community')}
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'team' ? "active" : "NotActive"}`} smooth to="/#team"  onClick={ this.toggleMenu } scroll={el => { window.location.hash = '#team'; const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = 40; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      {t('team')}
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'roadmap' ? "active" : "NotActive"}`} smooth to="/#roadmap"  onClick={ this.toggleMenu } scroll={el => { window.location.hash = '#roadmap'; const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = 40; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      {t('roadmap')}
                  </HashLink>

                  <HashLink role='button' className={`dropdown-item ${this.state.currentHash == 'contact' ? "active" : "NotActive"}`} smooth to="/#contact"  onClick={ this.toggleMenu } scroll={el => { window.location.hash = '#contact'; const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset; const yOffset = 40; window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); }}>
                      {t('contact')}
                  </HashLink>
                </NavDropdown>
                <NavDropdown title={t('services')} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://explorer.runebase.io">
                    {t('explorer')}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://explorer2.runebase.io">
                    {t('explorer')} 2
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://explorer3.runebase.io">
                    {t('explorer')} 3
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://faucet.runebase.io">
                    {t('faucet')}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://www.runesx.com">
                    RunesX
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={t('community')} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://t.me/runebase_runes">
                    {t('telegram_official')}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://t.me/Runesbase">
                    {t('telegram_international')}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://t.me/Runebaseoficial">
                    {t('telegram_brazil')}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://t.me/runesafrica">
                    {t('telegram_africa')}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://discord.gg/uTUXr43">
                    {t('discord')}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://twitter.com/Runebase_Tweet">
                    {t('twitter')}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://medium.com/@runebase">
                    {t('medium')}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://www.facebook.com/runebaseofficial">
                    {t('facebook')}
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={t('ranking')} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://coinmarketcap.com/currencies/runebase/">
                    CoinMarketCap
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://www.coingecko.com/en/coins/runebase">
                    CoinGecko
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://coinpaprika.com/coin/runes-runebase">
                    CoinPaprika
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://blockspot.io/coin/runebase">
                    BlockSpot
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://cmc.io/coins/runebase">
                    CMC
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://athcoinindex.com/coin/runebase">
                    AthCoinIndex
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://www.advfn.com/crypto/Runebase-RUNES">
                     Advfn
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://cryptoprices123.com/cryptos/runes-runebase">
                    CryptoPrices123
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://coinexpressway.com/Coin/runebase">
                    CoinExpressWay
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://globalcoinlisting.com/currency/runebase">
                    GlobalCoinListing
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://coincost.net/en/currency/runebase">
                    CoinCost
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://www.moonstats.com/runes-runebase">
                    MoonStats
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://comaps.io/coin/runebase">
                    CoMaps
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://cryptocurrencyliveprices.com/coin.php?id=Runebase">
                    CryptoCurrencyLivePrices
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={ this.toggleMenu } href="https://coingolive.com/en/coins/runebase/brl/">
                    CoinGoLive
                  </NavDropdown.Item>
                </NavDropdown>

                {/* <Link onClick={ this.toggleMenu } className="nav-link" to="/status">{t('status')}</Link> */}
              </Nav>

              <NavDropdown className='langPadding' title={<span><ReactCountryFlag code={countryCode(`${getCurrentLng()}`)} svg /> {t(`${getCurrentLng()}`)}</span>} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={(event) => { this.toggleMenu; changeLanguage('en')}}>
                    <div><ReactCountryFlag code="us" svg /> {t('en')}</div>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={(event) => { this.toggleMenu; changeLanguage('pt')}}>
                    <div><ReactCountryFlag code="br" svg /> {t('pt')}</div>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={(event) => { this.toggleMenu; changeLanguage('nl')}}>
                    <div><ReactCountryFlag code="nl" svg /> {t('nl')}</div>
                  </NavDropdown.Item>
              </NavDropdown>

              {/*{
              this.props.authenticated ?
                <ul>
                  <li>
                    <Link className="nav-link" to="/users">{t('users')}</Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/signout">{t('signout')}</Link>
                  </li>
                </ul>
                :
                <ul>
                  <li>
                    <Link className="nav-link" to="/signin">{t('signin')}</Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/signup">{t('signup')}</Link>
                  </li>
                </ul>
            }*/}
            </Navbar.Collapse>
          </Navbar>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(withTranslation()(Header));