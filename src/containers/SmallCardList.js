import { connect } from 'react-redux'
import { addToFavourites, removeFromFavourites } from '../actions/actions'
import SmallCardList from '../components/SmallCardList'
import { store } from '../index'

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFavBtnClick: (index) => {
      if (store.getState().pokemons[index].favourite) {
        dispatch(removeFromFavourites(index))
      } else {
        dispatch(addToFavourites(index))
      }
    }
  }
}

const SmallCardListCtrl = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallCardList)

export default SmallCardListCtrl
