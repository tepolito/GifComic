import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const GET_COMIC_SUCCESS = 'GET_COMIC_SUCCESS';
export const getComicSuccess = data => ({
    type: GET_COMIC_SUCCESS,
    data
});

export const fetchProtectedData = () => (dispatch, getState) => {
  console.log('fetchProtectedData called')
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/getComics`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const getComic = (id) => (dispatch, getState) => {
  console.log('getComic called', id)
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/comic/${id}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(getComicSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};
