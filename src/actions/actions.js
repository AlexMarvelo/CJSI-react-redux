import config from '../config'
import { store } from '../index'

export const actionTypes = {
  loadPokemons: 'LOAD_POKEMONS',
  requestPokemons: 'REQUEST_POKEMONS',
  receivePokemons: 'RECEIVE_POKEMONS',
  addToFavourites: 'ADD_TO_FAVOURITES',
  removeFromFavourites: 'REMOVE_FROM_FAVOURITES',
}

export const requestPokemons = () => {
  return {
    type: actionTypes.requestPokemons
  }
}

export const receivePokemons = (data) => {
  return {
    type: actionTypes.receivePokemons,
    data: data
  }
}

export const loadPokemons = () => {
  return dispatch => {
    dispatch(requestPokemons());
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
        let next = store.getState().meta.next;
        xhr.open(
          'GET',
          next ? config.url + next : `${config.url}api/v1/pokemon/?limit=${config.limit}`,
          true
        );
        xhr.onload = function() {
          if (this.status == 200) {
            resolve(this.response);
          } else {
            let error = new Error(this.statusText);
            error.code = this.status;
            reject(error);
          }
        };
        xhr.onerror = function() {
          reject(new Error('Network Error'));
        };
        xhr.send();
    })
    .then(JSON.parse)
    .then(data => {
      dispatch(receivePokemons(data));
    })
    .catch(error => {
      alert(error);
    });
  }
}

export const addToFavourites = (id) => {
  return {
    type: actionTypes.addToFavourites,
    pokemonIndex: id
  }
}

export const removeFromFavourites = (id) => {
  return {
    type: actionTypes.removeFromFavourites,
    pokemonIndex: id
  }
}
