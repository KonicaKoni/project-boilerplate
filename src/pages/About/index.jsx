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
    const about = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    return (
      <div className={styles.main}>
        <BeerHeader />
        <BeerNavigation active="3" />
        <div className={styles.body}>
          <div className={styles.content}>
          <h2>Mi imamo najbolja piva za Vas!</h2>
            <Main>{about}</Main>
          </div>
          <div className={styles.menu}>
            <BeerMenu favoritesCount={favoritesCount} cartCount={cartCount} />
            
          </div>
        </div><BeerFooter />
      </div>
    );
  }
}

