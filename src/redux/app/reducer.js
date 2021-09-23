import { TYPE } from './types';

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
