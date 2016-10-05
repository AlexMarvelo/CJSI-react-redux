import { combineReducers } from 'redux'
import pokemons from './pokemons'

const pokemonsApp = combineReducers({
  pokemons
})

export default pokemonsApp
