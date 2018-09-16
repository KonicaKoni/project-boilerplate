import React from 'react';
import { Link } from 'react-router-dom';
// import { PropTypes } from 'react'

import { Card, Main } from 'storybook-project/dist/';

import { connect } from 'react-redux';
import BeerPopup from '../../components/BeerPopup';
import BeerFooter from '../../components/BeerFooter';
import BeerHeader from '../../components/BeerHeader';
import BeerNavigation from '../../components/BeerNavigation';
import BeerMenu from '../../components/BeerMenu';

import styles from './index.css';
import { setCards, setCardEvents, showPopupBeer, removePopupBeer } from './action';

const beersJ = require('../App/db/beers');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.addFavorites = this.addFavorites.bind(this);
    this.addCart = this.addCart.bind(this);
    this.removePopupBeer = this.removePopupBeer.bind(this);
    this.setPopupBeer = this.setPopupBeer.bind(this); 
    // this.state = {
    //   beers: props.beers,
    //   cardevents: props.cardevents,
    //   menulinks: props.menulinks,
    //   popupBeer: props.popupBeer,
    // };
  }

  setPopupBeer(beer) {
    this.props.showPopupBeer(beer);
  }

  removePopupBeer() {
    this.props.removePopupBeer();
  }

  addFavorites(beerId) {
    // TODO: provjera da li id postoji u favoritima:
    // ako postoji maknuti
    // ako ne postoji staviti u favorite

    // kreiranje objekta
    const objCard = {
      id: beerId,
      type: 'FAVORITES',
    };
    // promjena propsa
    this.props.setCardEvents(objCard);
  }

  addCart(beerId) {
    const objCard = {
      id: beerId,
      type: 'CART',
    };
    this.props.setCardEvents(objCard);
  }

  render() {
    const cards = beersJ.map(beer =>
      (<Card
        id={beer.id}
        imgUrl={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        description={beer.description}
        iconFavorites="/icons/star-empty.png"
        iconFavorites= { this.props.cardevents.filter(e => e.id == beer.id && e.type == 'FAVORITES').length > 0 === true ? "/icons/star-full.png" : "/icons/star-empty.png" }
        iconCart="/icons/cart.png"
        iconDetails="/icons/info.png"
        onClickFavorites={() =>{this.addFavorites(beer.id)}}
        onClickCart={() =>{this.addCart(beer.id)}}
        onClickDetails={() => this.setPopupBeer(beer)}
      />));    
    const popupBeer = this.props.popupBeer;
    const popup = Object.keys(popupBeer).length !== 0 ?
      (<BeerPopup popupBeer={popupBeer}
        onClose={this.removePopupBeer}
        addCart={this.addCart}
        addFavorites={this.addFavorites}
      />)
      : undefined;
    const favoritesCount = this.props.cardevents.filter(e => e.type == 'FAVORITES').length > 0 === true ? this.props.cardevents.filter(e => e.type == 'FAVORITES').length : ''; 
    const cartCount = this.props.cardevents.filter(e => e.type == 'CART').length > 0 === true ? this.props.cardevents.filter(e => e.type == 'CART').length : '';
    return (
      <div className={styles.main}>
        <BeerHeader />
        <BeerNavigation active="1" />
        <div className={styles.body}>
          <div className={styles.content}>
            <Main>{cards}</Main>
          </div>
          <div className={styles.menu}>
            <BeerMenu favoritesCount={favoritesCount} cartCount={cartCount} />
         
            <div className={styles.popup}>
              {popup}
            </div>
          </div>
        </div>
      <BeerFooter /></div>  
       
    );
  }
}

const mapStateToProps = state => ({
  beers: state.home.beers,
  cardevents: state.home.cardevents,
  menulinks: state.home.menulinks,
  popupBeer: state.home.popupBeer,
}
);

const mapDispatchProps = dispatch => ({
  setCards: beers => dispatch(setCards(beers)),
  setCardEvents: (objCard) => dispatch(setCardEvents(objCard)),
  setCardEvn: (objCard) => dispatch(setCardEvn(objCard)),
  //setMenu: menulinks => dispatch(setMenu(menulinks)),
  showPopupBeer: beer => dispatch(showPopupBeer(beer)),
  removePopupBeer: () => dispatch(removePopupBeer()),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(Home);
