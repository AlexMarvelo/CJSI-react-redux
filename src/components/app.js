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
          <div className="row">
            <section id="bigCard__container" className="col-md-4 col-md-push-8">

            </section>
            <section className="col-md-8 col-md-pull-4">
              <Filter />
              <SmallCardList />
              <LoadMore />
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>
)

export default App
