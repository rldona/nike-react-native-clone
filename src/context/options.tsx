import React from 'react';

export const initialState = {
  currentGenre: 0,
  showProductFilterModal: false,
  isFavoriteEdited: false,
  isLoadingShow: false,
};

type ActionType =
  | {type: 'SET_CURRENT_GENRE'; payload: number}
  | {type: 'TOGGLE_SHOW_BUTTON_TO_EDIT_FAVORITES'}
  | {type: 'SHOW_LOADING'; payload: boolean}
  | {type: 'SHOW_EDIT_FAVORITEES_BUTTON'; payload: boolean}
  | {type: 'SHOW_PRODUCT_FILTER_MODAL'; payload: boolean};

export const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'SET_CURRENT_GENRE':
      return {
        ...state,
        currentGenre: action.payload,
      };
    case 'TOGGLE_SHOW_BUTTON_TO_EDIT_FAVORITES':
      return {
        ...state,
        isFavoriteEdited: !state.isFavoriteEdited,
      };
    case 'SHOW_LOADING':
      return {
        ...state,
        isLoadingShow: action.payload,
      };
    case 'SHOW_EDIT_FAVORITEES_BUTTON':
      return {
        ...state,
        isLoadingShow: action.payload,
      };
    case 'SHOW_PRODUCT_FILTER_MODAL':
      return {
        ...state,
        showProductFilterModal: action.payload,
      };
    default:
      return state;
  }
};

export const Context = React.createContext({});
