import React, { PropTypes } from 'react'
import SmallCard from './SmallCard'

const SmallCardList = ({pokemons, onCardClick}) => {
  const cards = pokemons.map(pokemon =>
    <SmallCard
      pokemon={pokemon}
      onCardClick={() => onCardClick(pokemon.pkdx_id)}
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
  onCardClick: PropTypes.func.isRequired
}

export default SmallCardList;
