export const fetchAllPokemon = () => {
  return $.ajax({
    url: '/api/pokemon',
    method: 'GET'
  // }).then(
  //   pokemon => console.log(pokemon)
  //
  // );
  });
};
