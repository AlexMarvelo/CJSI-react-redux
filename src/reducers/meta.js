import { actionTypes } from '../actions/actions'

export default function (meta = {}, action) {
  switch (action.type) {
    case actionTypes.requestPokemons:
      return Object.assign({}, meta, {
        loadingStatus: 'PENDING'
      });

    case actionTypes.receivePokemons:
      return Object.assign({}, meta, {
        loadingStatus: 'SUCCESS',
        next: action.data.meta.next,
        previous: action.data.meta.previous
      });

    default:
      return meta;
  }
}
