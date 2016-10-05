import React, { PropTypes } from 'react'
import config from '../config'

const SmallCard = ({pokemon, onFavBtnClick}) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const types = pokemon.types.map((type, index) =>
    <li className="card__lable" key={index}>{type.name[0].toUpperCase() + type.name.slice(1)}</li>
  );
  return (
    <li className="col-sm-3">
      <div className={pokemon.favourite ?
          'card card_small card_favourite' :
          'card card_small'
        }>
        <div className="card__imgCont">
          <img
            src={`${config.url}media/img/${pokemon.pkdx_id}.png`}
            className="card__img"
            alt={name}/>
        </div>
        <h3 className="card__title">
          {name}
        </h3>
        <ul className="card__lables">
          {types}
        </ul>
        <button
          className={pokemon.favourite ? 'button__addFav button__addFav_active' : 'button__addFav'}
          onClick={onFavBtnClick}>
          {pokemon.favourite ? 'Remove to Favourites ' : 'Add from Favourites '}
          <span className="glyphicon glyphicon-thumbs-up"></span>
        </button>
      </div>
    </li>
  );
}

SmallCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  onFavBtnClick: PropTypes.func.isRequired
}

export default SmallCard;
