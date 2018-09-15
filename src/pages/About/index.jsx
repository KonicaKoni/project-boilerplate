import React from 'react';
import { Link } from 'react-router-dom';

import { Navigation, Main, Menu } from 'storybook-project/dist/';
import BeerFooter from '../../components/BeerFooter';
import BeerHeader from '../../components/BeerHeader';
import BeerNavigation from '../../components/BeerNavigation';
import BeerMenu from '../../components/BeerMenu';

import { connect } from 'react-redux';
// import './index.css';
import styles from './index.css';

export default class About extends React.Component {
  render() {
    const favoritesCount = '';
    const cartCount = '';
    const about = 'about us';
    return (
      <div className={styles.main}>
        <BeerHeader />
        <BeerNavigation active="3" />
        <div className={styles.body}>
          <div className={styles.content}>
            <Main>{about}</Main>
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

