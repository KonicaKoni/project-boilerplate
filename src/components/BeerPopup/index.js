import React from 'react';
import { Popup, Button } from 'storybook-project/dist';
import style from './index.css';

export default class BeerPopup extends React.Component {
  render() {
    const div =
        (
          <Popup
            onClose={this.props.onClose}
            tooltip={`Tip: ${  this.props.popupBeer.brewers_tips  }`}
          >
            <h2>{this.props.popupBeer.name} ({this.props.popupBeer.first_brewed})</h2>
            <hr />
            <img src={this.props.popupBeer.image_url} className={style.popupImage} />
            <div className={style.popupParagraph}>
              <p>
                  {this.props.popupBeer.description}
              </p>
              <p>
                {this.props.popupBeer.brewers_tips}
              </p>
            </div>
            <div className={style.clear_floatd} />
            <hr />
            <div className={style.popupButtonConteiner}>
              {/* <Button onClick={this.props.onClose} text="Zatvori" /> */}
              <Button onClick={() => { this.props.addCart(this.props.popupBeer.id); }} text="Dodaj u košaricu" />
              <Button onClick={() => { this.props.addFavorites(this.props.popupBeer.id); }} text="Najdraže pive" />
            </div>
          </Popup>
        );
    return div;
  }
}
