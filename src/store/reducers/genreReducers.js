import {FETCH_GENRES, FETCH_GENRES_FAILURE, FETCH_GENRES_SUCCESS} from "../actions/genreActions";

const initialState = {
  genresList: {
    loading: false,
    genres: [],
    error: null,
  }
};

const genreReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      return {
        ...state,
        genresList: {
          loading: true,
          genres: [],
          error: null,
        }
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genresList: {
          loading: false,
          genres: action.payload,
          error: null,
        }
      };
    case FETCH_GENRES_FAILURE:
      return {
        ...state,
        genresList: {
          loading: false,
          genres: [],
          error: action.payload,
        }
      };
    default:
      return state;
  }
};

export default genreReducers;