import React, { PropTypes } from 'react'

const SmallCard = ({pokemon, onCardClick}) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  return (
    <li className="col-sm-4">
      <div className="card card_small" onClick={onCardClick}>
        <div className="card__imgCont">
          <img
            src={pokemon.image}
            className="card__img"
            alt={name}/>
        </div>
        <h3 className="card__title">
          {name}
        </h3>
        <ul className="card__lables">

        </ul>
      </div>
    </li>
  );
}

SmallCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  onCardClick: PropTypes.func.isRequired
}

export default SmallCard;
