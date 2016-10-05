import { connect } from 'react-redux'
import { showDetailed } from '../actions/actions'
import SmallCardList from '../components/SmallCardList'

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (id) => {
      dispatch(showDetailed(id))
    }
  }
}

const SmallCardListCtrl = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallCardList)

export default SmallCardListCtrl
