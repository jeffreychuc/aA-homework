import { ADD_FRUIT, CLEAR } from "./actions";

const _defaultState = {
  fruits: []
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case ADD_FRUIT:
      return {
        fruits: [
          ...oldState.fruits,
          action.fruit
        ] //above is a new object that is constructed from the old state.  does not mutate old state  pure function.
      };
    case CLEAR:
      return _defaultState;
    default:
      return oldState;
  }
}

export default reducer;
