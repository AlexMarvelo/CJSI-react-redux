import React from 'react'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'

require('../../node_modules/bootstrap/dist/css/bootstrap.css')
require('../../assets/styles/style.css')

import Header from './Header'
import Homepage from './Homepage'

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="page">
          <Header title={'Pokemon Legends'} />
          <main>
            {this.props.children}
          </main>
        </div>
      </div>
    )
  }
})

export default App
