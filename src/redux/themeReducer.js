import * as actionTypes from './actionTypes';

import themes from '../themes';

const defaultState = {
  theme: themes.BLUE
};

const themeReducer = (state = defaultState, action) => {
  const {theme, type} = action;

  switch(type) {
    case actionTypes.UPDATE_THEME:
      return {
        ...state,
        theme
      }

    default:
      return state;
  }
}

export default themeReducer;
