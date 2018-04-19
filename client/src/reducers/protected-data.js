import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    GET_COMIC_SUCCESS
} from '../actions/protected-data';

const initialState = {
    data: [],
    cards: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
      console.log(state, action);
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === GET_COMIC_SUCCESS){
      console.log('getComic reducer', state, action)
      return Object.assign({}, state,{cards: action.data.cards});
    }
    return state;
}
