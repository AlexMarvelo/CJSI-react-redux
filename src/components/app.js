import React from 'react'

require('../../node_modules/bootstrap/dist/css/bootstrap.css')
require('../../assets/styles/style.css')

import Header from './Header'
import Filter from './Filter'
import SmallCardList from '../containers/SmallCardList'
import LoadMore from '../containers/LoadMore'

const App = () => (
  <div>
    <div className="background"></div>
    <div className="preloader"></div>
    <div className="page customScrollBlock">
      <Header title={'Pokemon Legends'} />
      <main>
        <div className="container">
          <Filter />
          <SmallCardList />
          <LoadMore />
        </div>
      </main>
    </div>
  </div>
)

export default App
