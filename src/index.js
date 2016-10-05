import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import pokemonsApp from './reducers/reducers'
import App from './containers/App'
import Homepage from './components/Homepage'
import FavouritesPage from './components/FavouritesPage'
import { loadPokemons } from './actions/actions'

const loggerMiddleware = createLogger();

export const store = createStore(
  pokemonsApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ),
);
store.subscribe(() => {
  localStorage.setItem('PLdata', JSON.stringify(store.getState()));
});

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/'>
        <IndexRedirect to='/pokemons' />
        <Route path='pokemons' component={App} >
          <IndexRoute component={Homepage} />
          <Route path='favourites' component={FavouritesPage} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
