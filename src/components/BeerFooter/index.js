import React from 'react';
import { Footer, ImageText } from 'storybook-project/dist';

export default class BeerFooter extends React.Component {
  render() {
    const div =
          (
            <Footer>
              <ImageText
                imgUrl="/icons/facebook2.png"
                classImg="img"
                classTxt="text"
                text="Facebook"
                href="https://www.facebook.com/"
              />
              Design by Koni
            </Footer>
          );
    return div;
  }
}
