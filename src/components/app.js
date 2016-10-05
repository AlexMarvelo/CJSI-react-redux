import React from 'react'

const App = () => (
  <div>
    <div className="background"></div>
    <div className="preloader"></div>
    <div className="page customScrollBlock hidden">
      <header className="header">
        <div className="container">
          <h1 className="header__title">Pokemon Legends</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <section id="bigCard__container" className="col-md-4 col-md-push-8"></section>
            <section className="col-md-8 col-md-pull-4">
              <div id="filter__container"></div>
              <div id="smallCard__container"></div>
              <div className="row">
                <div className="col-sm-4 col-sm-push-4">
                  <button id="loadMoreButton" className="button button_gradient">Load more</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>
)

export default App
