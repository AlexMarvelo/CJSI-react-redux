import React, { PropTypes } from 'react'
import SmallCard from './SmallCard'

const SmallCardList = ({pokemons, onFavBtnClick}) => {
  const cards = pokemons.map((pokemon, index) =>
    <SmallCard
      pokemon={pokemon}
      onFavBtnClick={() => onFavBtnClick(index)}
      key={pokemon.pkdx_id}
    />
  );
  return (
    <ul className='row'>
      {cards}
    </ul>
  )
}

SmallCardList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  onFavBtnClick: PropTypes.func.isRequired
}

export default SmallCardList;
