import React, { PropTypes } from 'react'
import { Link } from 'react-router';

const Header = (props) => (
  <header className="header">
    <div className="container">
      <Link to="/pokemons" className="header_titleLink">
        <h1 className="header__title">{props.title}</h1>
      </Link>
      <Link to="/pokemons/favourites" className="favouritesLink">
        Favourites <span className="glyphicon glyphicon-star"></span>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
