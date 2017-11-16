import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const initialState = {};

const pokemonReducer = (state = initialState, action) => {
  let newState = {};
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let pokeIndices = Object.keys(action.pokemon);
      pokeIndices.forEach((pokeId) => {newState[pokeId] = action.pokemon[pokeId];});
      return newState;
    default:
      return state;
  }

};

export default pokemonReducer;
