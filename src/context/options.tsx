import React from 'react';

export const initialState = {
  currentGenre: 0,
};

type ActionType = {type: 'SET_CURRENT_GENRE'; payload: number};

export const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'SET_CURRENT_GENRE':
      return {
        ...state,
        currentGenre: action.payload,
      };
    default:
      return state;
  }
};

export const Context = React.createContext({});
