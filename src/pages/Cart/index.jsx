import React from 'react';
import { Link } from 'react-router-dom';
// import { PropTypes } from 'react'

import { Main, Table, Button } from 'storybook-project/dist/';

import { connect } from 'react-redux';
import BeerFooter from '../../components/BeerFooter';
import BeerHeader from '../../components/BeerHeader';
import BeerNavigation from '../../components/BeerNavigation';
import BeerMenu from '../../components/BeerMenu';
// import './index.css';
import styles from './index.css';
import { removeCardEvents, setCardEvents } from '../Home/action';

const beersJ = require('../App/db/beers');

const header = [
  {
    name: '#',
  },
  {
    name: 'Naziv',
  },
  {
    name: 'Opis',
  },
  {
    name: 'Količina',
  },
];

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.addCart = this.addCart.bind(this);
    this.tempaddCart = this.tempaddCart.bind(this);
  }

  addCart(event) {
    const objCard = {
      id: event.target.id,
      type: 'CART',
    };
    this.props.removeCardEvents(objCard);
  }

  tempaddCart(event) {
    const objCard3 = {
      id: 1,
      type: 'CART',
    };
    console.log(objCard3);
    this.props.setCardEvents(objCard3);
  }

  render() {

    const cartValues = [];
    // beersJ.map((beer) => {
    //   cartValues.push({'id': beer.id, 'name':beer.name, 'desc':beer.description, 'number':1});
    // });
    this.props.cardevents.filter(e => e.type == 'CART').map((cart) => 
		{
      const name = beersJ.filter(e => e.id == cart.id)[0].name;
      const description = beersJ.filter(e => e.id == cart.id)[0].description;
      cartValues.push({'id': cart.id, 'name': name, 'desc': description, 'number': 1});
    });

    const favoritesCount = this.props.cardevents.filter(e => e.type == 'FAVORITES').length > 0 === true ? this.props.cardevents.filter(e => e.type == 'FAVORITES').length : '';
    const cartCount = this.props.cardevents.filter(e => e.type == 'CART').length > 0 === true ? this.props.cardevents.filter(e => e.type == 'CART').length : '';
    const carts = (<Table
      headers={header}
      values={cartValues}
      icon="/icons/bin2.png"
      onClick={this.addCart}
    />);
    return (
      <div className={styles.main}>
        <BeerHeader />
        <Button text="Press me!" onClick={this.tempaddCart} />
        <BeerNavigation active="0" />
        <div className={styles.body}>
          <div className={styles.content}>
            <Main>{carts}</Main>
          </div>
          <div className={styles.menu}>
            <BeerMenu favoritesCount={favoritesCount} cartCount={cartCount} />
            <BeerFooter />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cardevents: state.home.cardevents,
});

const mapDispatchProps = dispatch => ({
  removeCardEvents: objCard => dispatch(removeCardEvents(objCard)),
  setCardEvents: objCard => dispatch(setCardEvents(objCard)),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(Cart);
