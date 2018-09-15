export const homeReducer = (state = {
  beers: [], cardevents: [], menulinks: [], popupBeer: {},
}, action) => {
  switch (action.type) {
    case 'BEERS':
      return Object.assign({}, state, { beers: action.value });
    case 'SET-CARD':
      const currentCardEvents = state.cardevents.slice();
      currentCardEvents.push(action.objCard);
      return Object.assign({}, state, { cardevents: currentCardEvents });
    case 'REMOVE-CARDEVENT':
      const stateCartEvents = state.cardevents.slice();
      stateCartEvents.pop(action.objCard);
      return Object.assign({}, state, { cardevents: stateCartEvents });
    case 'SET-MENU':
      return Object.assign({}, state, { menulinks: action.value });
    case 'SHOW_POPUP_BEER':
      return {
        ...state,
        popupBeer: action.value,
      };
    case 'REMOVE_POPUP_BEER':
      return {
        ...state,
        popupBeer: {},
      };
    default:
      return state;
  }
};
