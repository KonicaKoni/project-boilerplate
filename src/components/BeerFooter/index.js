import React from 'react';
import { Footer, ImageText } from 'storybook-project/dist';

export default class BeerFooter extends React.Component {
  render() {
    const div =
          (
            <Footer>
              <ImageText
                imgUrl="/icons/twitter.png"
                classImg="img"
                classTxt="text"
                text="Twitter"
                href="https://twitter.com"
              />
              <ImageText
                imgUrl="/icons/facebook2.png"
                classImg="img"
                classTxt="text"
                text="Facebook"
                href="https://www.facebook.com/"
              />
              <ImageText
                imgUrl="/icons/github.png"
                classImg="img"
                classTxt="text"
                text="GitHub"
                href="https://github.com/"
              />
              <ImageText
                imgUrl="/icons/instagram.png"
                classImg="img"
                classTxt="text"
                text="Instagram"
                href="https://www.instagram.com"
              />
            </Footer>
          );
    return div;
  }
}
