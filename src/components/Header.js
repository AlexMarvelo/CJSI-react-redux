import React, { PropTypes } from 'react'

const Header = (props) => (
  <header className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
