import React from 'react';
import { Navigation } from 'storybook-project/dist';
import PropTypes from 'prop-types';

export default class BeerNavigation extends React.Component {
  render() {
    const links = [
      {
        id: 1,
        content: <a href="/Home">Početna</a>,
        active: this.props.active == 1,
      },
      {
        id: 5,
        content: <a href="/About/">O nama</a>,
        active: this.props.active == 3,
      },
    ];
    const div =
          (
            <Navigation links={links} />
          );
    return div;
  }
}

BeerNavigation.propTypes = {
  active: PropTypes.integer,
};
