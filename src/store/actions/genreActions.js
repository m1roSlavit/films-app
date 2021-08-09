import movieService from "../../services/movieService";

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
    .then(filmsData => {
      dispatch(genresRequestedSuccess(filmsData));
    })
    .catch(_ => {
      dispatch(genresRequestedFailure('Ops... Something went wrong'));
    })
};