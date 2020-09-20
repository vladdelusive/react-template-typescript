import { types } from "./actions";
import { ISmthStore, IActionTypes } from "./types";

const initialState: ISmthStore = {
  smth: {
  }
};

const reducer = (state = initialState, action: IActionTypes) => {
  switch (action.type) {
    case types.SAVE_SMTH:
      return {
        ...state,
        smth: {
          ...state.smth,
          ...action.payload
        },
      };
    default:
      return state;
  }
};

export { reducer };
