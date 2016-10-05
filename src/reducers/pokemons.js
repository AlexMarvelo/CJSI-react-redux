import config from '../config'
import { actionTypes } from '../actions/actions'

const defaultPokemonList = [];

export default function (pokemons = defaultPokemonList, action) {
  switch (action.type) {
    case actionTypes.requestPokemons:
      return pokemons;

    case actionTypes.receivePokemons:
      return pokemons.concat(action.data.objects);

    case actionTypes.showDetailed:
      return pokemons;

    default:
      return pokemons
  }
}
