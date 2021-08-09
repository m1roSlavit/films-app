import {
  FETCH_FILM,
  FETCH_FILM_FAILURE,
  FETCH_FILM_RECOMMENDATION,
  FETCH_FILM_RECOMMENDATION_FAILURE,
  FETCH_FILM_RECOMMENDATION_SUCCESS,
  FETCH_FILM_SUCCESS,
  FETCH_POPULAR_FILMS,
  FETCH_POPULAR_FILMS_FAILURE,
  FETCH_POPULAR_FILMS_SUCCESS,
  FETCH_SEARCH_FILMS,
  FETCH_SEARCH_FILMS_FAILURE,
  FETCH_SEARCH_FILMS_SUCCESS,
  RESET_POPULAR_FILMS,
  RESET_SEARCH_FILMS
} from "../actions/filmActions";

const initialState = {
  popularFilms: {
    loading: false,
    films: [],
    error: null,
    currentPage: 1,
    totalPages: 1,
  },
  searchFilms: {
    loading: false,
    films: [],
    error: null,
    currentPage: 1,
    totalPages: 1,
    searchQuery: '',
  },
  currentFilm: {
    loading: false,
    film: null,
    error: null,
  },
  filmRecommendations: {
    loading: false,
    films: [],
    error: null,
  }
};

const filmReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_FILMS:
      return {
        ...state,
        popularFilms: {
          ...state.popularFilms,
          loading: true,
        }
      };
    case FETCH_POPULAR_FILMS_SUCCESS:
      return {
        ...state,
        popularFilms: {
          ...state.popularFilms,
          loading: false,
          films: [
            ...state.popularFilms.films,
            ...action.payload.results,
          ],
          error: null,
          totalPages: action.payload.total_pages,
          currentPage: action.payload.page,
        }
      };
    case FETCH_POPULAR_FILMS_FAILURE:
      return {
        ...state,
        popularFilms: {
          ...state.popularFilms,
          loading: false,
          films: [],
          error: action.payload,
          currentPage: 1,
          totalPages: 1,
        }
      };
    case RESET_POPULAR_FILMS:
      return {
        ...state,
        popularFilms: {
          ...initialState.popularFilms
        }
      };
    case FETCH_SEARCH_FILMS:
      return {
        ...state,
        searchFilms: {
          ...state.searchFilms,
          loading: true,
          searchQuery: action.payload,
        }
      };
    case FETCH_SEARCH_FILMS_SUCCESS:
      return {
        ...state,
        searchFilms: {
          ...state.searchFilms,
          loading: false,
          films: [
            ...state.searchFilms.films,
            ...action.payload.results,
          ],
          error: null,
          totalPages: action.payload.total_pages,
          currentPage: action.payload.page,
        }
      };
    case FETCH_SEARCH_FILMS_FAILURE:
      return {
        ...state,
        searchFilms: {
          ...state.searchFilms,
          loading: false,
          films: [],
          error: action.payload,
          currentPage: 1,
          totalPages: 1,
        }
      };
    case RESET_SEARCH_FILMS:
      return {
        ...state,
        searchFilms: {
          ...initialState.searchFilms
        }
      };
    case FETCH_FILM:
      return {
        ...state,
        currentFilm: {
          loading: true,
          film: null,
          error: null,
        }
      };
    case FETCH_FILM_SUCCESS:
      return {
        ...state,
        currentFilm: {
          loading: false,
          film: action.payload,
          error: null,
        }
      };
    case FETCH_FILM_FAILURE:
      return {
        ...state,
        currentFilm: {
          loading: false,
          film: null,
          error: action.payload,
        }
      };
    case FETCH_FILM_RECOMMENDATION:
      return {
        ...state,
        filmRecommendations: {
          loading: true,
          films: [],
          error: null,
        }
      }
    case FETCH_FILM_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        filmRecommendations: {
          loading: false,
          films: action.payload,
          error: null,
        }
      }
    case FETCH_FILM_RECOMMENDATION_FAILURE:
      return {
        ...state,
        filmRecommendations: {
          loading: false,
          films: [],
          error: action.payload,
        }
      }
    default:
      return state;
  }
};

export default filmReducers;