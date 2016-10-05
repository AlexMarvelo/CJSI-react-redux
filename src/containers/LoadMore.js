import { connect } from 'react-redux'
import { loadPokemons } from '../actions/actions'
import LoadMore from '../components/LoadMore'

const mapStateToProps = (state) => {
  return {
    loadingStatus: state.meta.loadingStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBtnClick: () => {
      dispatch(loadPokemons())
    }
  }
}

const LoadMoreCtrl = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadMore)

export default LoadMoreCtrl
