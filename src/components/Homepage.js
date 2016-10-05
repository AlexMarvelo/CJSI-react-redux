import React from 'react'
import { store } from '../index'
import { loadPokemons } from '../actions/actions'

import Filter from './Filter'
import SmallCardList from '../containers/SmallCardList'
import LoadMore from '../containers/LoadMore'

const Homepage = React.createClass({
  render() {
    if (store.getState().pokemons.length == 0) {
      store.dispatch(loadPokemons());
    }
    return (
      <div className="container">
        <Filter />
        <SmallCardList />
        <LoadMore />
      </div>
    )
  }
})

export default Homepage
