export default function (state = {}, action) {
  switch (action.type) {
    case 'LOAD_POCKEMONS':
      console.log('loading pockemons');
      return state;

    default:
      return state
  }
}
