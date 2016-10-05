import React, { PropTypes } from 'react'
import SmallCard from './SmallCard'

const SmallCardList = ({pokemons, onFavBtnClick}) => {
  const cards = pokemons.map(pokemon =>
    <SmallCard
      pokemon={pokemon}
      onFavBtnClick={() => onFavBtnClick(pokemon.pkdx_id)}
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
