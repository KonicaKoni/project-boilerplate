import React from 'react';
import { Header } from 'storybook-project/dist';

export default class BeerHeader extends React.Component {
  render() {
    const div =
            (
              <Header
                imgUrl="/icons/duff.png"
                class=""
                text="Beer shop"
              />
            );
    return div;
  }
}
