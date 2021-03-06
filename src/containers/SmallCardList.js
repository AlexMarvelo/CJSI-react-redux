import { connect } from 'react-redux'
import { addToFavourites, removeFromFavourites } from '../actions/actions'
import { getPokemonById } from '../utils/functions'
import SmallCardList from '../components/SmallCardList'

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFavBtnClick: (id) => {
      const pokemon = getPokemonById(id);
      if (pokemon.favourite) {
        dispatch(removeFromFavourites(id))
      } else {
        dispatch(addToFavourites(id))
      }
    }
  }
}

const SmallCardListCtrl = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallCardList)

export default SmallCardListCtrl
