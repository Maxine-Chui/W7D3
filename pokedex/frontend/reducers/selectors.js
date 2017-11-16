export const selectAllPokemon = (state) => {
  return Object.keys(state.entities.pokemon).map(el => state.entities.pokemon[el]);
};
