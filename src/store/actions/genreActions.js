import movieService from "../../services/movieService";

export const FETCH_GENRES = 'FETCH_GENRES';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
export const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE';

export const genresRequested = () => ({
  type: FETCH_GENRES,
});

export const genresRequestedSuccess = (payload) => ({
  type: FETCH_GENRES_SUCCESS,
  payload,
});

export const genresRequestedFailure = (payload) => ({
  type: FETCH_GENRES_FAILURE,
  payload,
});

export const fetchGenres = () => (dispatch) => {
  dispatch(genresRequested());
  movieService.getGenres()
    .then(genres => {
      dispatch(genresRequestedSuccess(genres));
    })
    .catch(_ => {
      dispatch(genresRequestedFailure('Ops... Something went wrong'));
    })
};