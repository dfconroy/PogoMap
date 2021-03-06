
import {
  WILD_POKEMON_ADDED,
  SCANNING_STARTED,
  SCANNING_COMPLETE,

} from '../constants/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.Map();

export default function user(state = initialState, action) {
  switch (action.type) {
    case WILD_POKEMON_ADDED:
      return state.set(action.payload.pokemon.uid, action.payload.pokemon);
    case SCANNING_STARTED:
      return state.filter(pokemon => pokemon.disappearTime > Date.now());
    default:
      return state;
  }
}
