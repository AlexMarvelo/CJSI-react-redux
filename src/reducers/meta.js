import { actionTypes } from '../actions/actions'

const localData = JSON.parse(localStorage.getItem('PLdata'));
const defaultMetadata =
  localData && localData.meta ? localData.meta : {};

export default function (meta = defaultMetadata, action) {
  switch (action.type) {
    case actionTypes.requestPokemons:
      return Object.assign({}, meta, {
        loadingStatus: 'PENDING'
      });

    case actionTypes.receivePokemons:
      return Object.assign({}, meta, {
        loadingStatus: 'SUCCESS',
        next: action.data.meta.next,
        previous: action.data.meta.previous,
        total_count: action.data.meta.total_count,
        limit: action.data.meta.limit,
        offset: action.data.meta.offset
      });

    default:
      return meta;
  }
}
