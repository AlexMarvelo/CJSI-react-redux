import config from '../config'
import { actionTypes } from '../actions/actions'

const localData = JSON.parse(localStorage.getItem('PLdata'));
const defaultPokemonList =
  localData && localData.pokemons ? localData.pokemons : [];

export default function (pokemons = defaultPokemonList, action) {
  switch (action.type) {
    case actionTypes.requestPokemons:
      return pokemons;

    case actionTypes.receivePokemons:
      return pokemons.concat(action.data.objects);

    case actionTypes.addToFavourites:
      return pokemons.map(pokemon => {
        if (pokemon.pkdx_id == action.pokemonId) {
          pokemon.favourite = true;
        }
        return pokemon;
      });

    case actionTypes.removeFromFavourites:
      return pokemons.map(pokemon => {
        if (pokemon.pkdx_id == action.pokemonId) {
          pokemon.favourite = false;
        }
        return pokemon;
      });

    default:
      return pokemons
  }
}
