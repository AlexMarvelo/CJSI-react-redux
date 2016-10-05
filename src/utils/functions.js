import { store } from '../index'

export function getPokemonById(id) {
  let result;
  store.getState().pokemons.forEach(pokemon => {
    if (pokemon.pkdx_id === id) result = pokemon;
  })
  return result;
}

export function getFavourites() {
  return store.getState().pokemons.filter(pokemon => pokemon.favourite)
}
