export const increase = value => ({
  type: 'INCREASE',
  value,
});
export const setCards = value => ({
  type: 'BEERS',
  value,
});
export const setCardEvents = objCard => ({
  type: 'SET-CARD',
  objCard,
});
export const removeCardEvents = objCard => ({
  type: 'REMOVE-CARDEVENT',
  objCard,
});
export const setMenu = value => ({
  type: 'SET-MENU',
  value,
});
export const showPopupBeer = value => ({
  type: 'SHOW_POPUP_BEER',
  value,
});
export const removePopupBeer = () => ({
  type: 'REMOVE_POPUP_BEER',
});
export const changeBeerInCart = (beerId, amount) => ({
  type: 'CHANGE_BEER_IN_CART',
  beerId,
  amount,
});
