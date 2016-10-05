import { combineReducers } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import pokemons from './pokemons'
import meta from './meta'

const pokemonsApp = combineReducers({
  pokemons,
  meta,
  routing: routerReducer
})

export default pokemonsApp
