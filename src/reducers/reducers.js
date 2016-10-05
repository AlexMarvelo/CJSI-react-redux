import { combineReducers } from 'redux'
import pokemons from './pokemons'
import meta from './meta'

const pokemonsApp = combineReducers({
  pokemons,
  meta
})

export default pokemonsApp
