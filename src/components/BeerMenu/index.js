import React from 'react';
import { Menu } from 'storybook-project/dist';
import PropTypes from 'prop-types';

export default class BeerMenu extends React.Component {
  render() {
    const div =
          (
            <Menu links={
                [{
                  id: 1,
                  content: 'Vaši favoriti',
                  href: '/Favorites',
                  active: this.props.active == 1,
                  number: this.props.favoritesCount,
                },
                {
                  id: 2,
                  content: 'Košarica',
                  href: '/Cart',
                  number: this.props.cartCount,
                  active: this.props.active == 2,
                },
                {
                  id: 3,
                  content: 'GitHub kod',
                  href: 'https://github.com/KonicaKoni/storybook-boilerplate',
                  active: this.props.active == 3,
                },
              ]}
            />
          );
    return div;
  }
}

BeerMenu.propTypes = {
    favoritesCount: PropTypes.string,
    cartCount: PropTypes.string,
    active: PropTypes.integer,
};
