import { connect } from 'react-redux'
import { addToFavourites, removeFromFavourites } from '../actions/actions'
import { getPokemonById, getFavourites } from '../utils/functions'
import FavouritesList from '../components/FavouritesList'

const mapStateToProps = (state) => {
  return {
    pokemons: getFavourites()
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

const FavouritesListCtrl = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouritesList)

export default FavouritesListCtrl
