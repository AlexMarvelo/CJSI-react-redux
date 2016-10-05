import config from '../config'
import { actionTypes } from '../actions/actions'

const defaultPokemonList = [];

export default function (pokemons = defaultPokemonList, action) {
  switch (action.type) {
    case actionTypes.requestPokemons:
      return pokemons;

    case actionTypes.receivePokemons:
      return pokemons.concat(action.data.objects);

    case actionTypes.addToFavourites:
      return pokemons.map((pokemon, index) => {
        if (index == action.pokemonIndex) {
          pokemon.favourite = true;
        }
        return pokemon;
      });

    case actionTypes.removeFromFavourites:
      return pokemons.map((pokemon, index) => {
        if (index == action.pokemonIndex) {
          pokemon.favourite = false;
        }
        return pokemon;
      });

    default:
      return pokemons
  }
}
