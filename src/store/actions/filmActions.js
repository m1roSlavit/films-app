import movieService from "../../services/movieService";

export const FETCH_POPULAR_FILMS = 'FETCH_POPULAR_FILMS';
export const FETCH_POPULAR_FILMS_SUCCESS = 'FETCH_POPULAR_FILMS_SUCCESS';
export const FETCH_POPULAR_FILMS_FAILURE = 'FETCH_POPULAR_FILMS_FAILURE';
export const RESET_POPULAR_FILMS = 'RESET_POPULAR_FILMS';

export const popularFilmsRequested = () => ({
  type: FETCH_POPULAR_FILMS,
});

export const popularFilmsRequestedSuccess = (payload) => ({
  type: FETCH_POPULAR_FILMS_SUCCESS,
  payload,
});

export const popularFilmsRequestedFailure = (payload) => ({
  type: FETCH_POPULAR_FILMS_FAILURE,
  payload,
});

export const popularFilmsReset = () => ({
  type: RESET_POPULAR_FILMS,
});

export const fetchPopularFilms = (pageIdx) => (dispatch) => {
  dispatch(popularFilmsRequested());
  movieService.getPopularMovies(pageIdx)
    .then(filmsData => {
      dispatch(popularFilmsRequestedSuccess(filmsData));
    })
    .catch(_ => {
      dispatch(popularFilmsRequestedFailure('Ops... Something went wrong'));
    })
};

export const FETCH_SEARCH_FILMS = 'FETCH_SEARCH_FILMS';
export const FETCH_SEARCH_FILMS_SUCCESS = 'FETCH_SEARCH_FILMS_SUCCESS';
export const FETCH_SEARCH_FILMS_FAILURE = 'FETCH_SEARCH_FILMS_FAILURE';
export const RESET_SEARCH_FILMS = 'RESET_SEARCH_FILMS';

export const searchFilmsRequested = (payload) => ({
  type: FETCH_SEARCH_FILMS,
  payload
});

export const searchFilmsRequestedSuccess = (payload) => ({
  type: FETCH_SEARCH_FILMS_SUCCESS,
  payload,
});

export const searchFilmsRequestedFailure = (payload) => ({
  type: FETCH_SEARCH_FILMS_FAILURE,
  payload,
});

export const searchFilmsReset = () => ({
  type: RESET_SEARCH_FILMS,
});

export const fetchSearchFilms = (searchQuery, pageIdx) => (dispatch) => {
  dispatch(searchFilmsRequested(searchQuery));
  movieService.getSearchMovies(searchQuery, pageIdx)
    .then(filmsData => {
      dispatch(searchFilmsRequestedSuccess(filmsData));
    })
    .catch(_ => {
      dispatch(searchFilmsRequestedFailure('Ops... Something went wrong'));
    })
};

export const FETCH_FILM = 'FETCH_FILM';
export const FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS';
export const FETCH_FILM_FAILURE = 'FETCH_FILM_FAILURE';

export const filmRequested = () => ({
  type: FETCH_FILM,
});

export const filmRequestedSuccess = (payload) => ({
  type: FETCH_FILM_SUCCESS,
  payload,
});

export const filmRequestedFailure = (payload) => ({
  type: FETCH_FILM_FAILURE,
  payload,
});

export const fetchFilm = (id) => (dispatch) => {
  dispatch(filmRequested());
  movieService.getMovieDetails(id)
    .then(filmData => {
      dispatch(filmRequestedSuccess(filmData));
    })
    .catch(_ => {
      dispatch(filmRequestedFailure('Ops... Something went wrong'));
    })
}

export const FETCH_FILM_RECOMMENDATION = 'FETCH_FILM_RECOMMENDATION';
export const FETCH_FILM_RECOMMENDATION_SUCCESS = 'FETCH_FILM_RECOMMENDATION_SUCCESS';
export const FETCH_FILM_RECOMMENDATION_FAILURE = 'FETCH_FILM_RECOMMENDATION_FAILURE';

export const filmRecommendationsRequested = () => ({
  type: FETCH_FILM_RECOMMENDATION,
});

export const filmRecommendationsRequestedSuccess = (payload) => ({
  type: FETCH_FILM_RECOMMENDATION_SUCCESS,
  payload,
});

export const filmRecommendationsRequestedFailure = (payload) => ({
  type: FETCH_FILM_RECOMMENDATION_FAILURE,
  payload,
});

export const fetchFilmRecommendations = (id) => (dispatch) => {
  dispatch(filmRecommendationsRequested());
  movieService.getMovieRecommendation(id)
    .then(films => {
      dispatch(filmRecommendationsRequestedSuccess(films));
    })
    .catch(_ => {
      dispatch(filmRecommendationsRequestedFailure('Ops... Something went wrong'));
    })
}