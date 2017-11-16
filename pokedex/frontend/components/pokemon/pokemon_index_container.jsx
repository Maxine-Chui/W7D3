import { connect } from 'react-redux';
import { receiveAllPokemon, requestAllPokemon } from '../actions/pokemon_actions';
import { selectAllPokemon } from '../reducers/selectors';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: (pokemon) => dispatch(receiveAllPokemon(pokemon))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);