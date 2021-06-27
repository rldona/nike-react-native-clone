export const initialState = {
  count: 0,
};

type ActionType = {type: 'increment'} | {type: 'decrement'};

export const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
