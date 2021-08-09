import {REMOVE_FILM, SAVE_FILM} from "../actions/savedFilmsActions";

const initialState = {
  savedFilms: [],
};

export const savedFilmsReducers = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FILM:
      if (state.savedFilms.includes(action.payload))
        return state;
      return {
        ...state,
        savedFilms: [
          ...state.savedFilms,
          action.payload,
        ]
      };
    case REMOVE_FILM:
      return {
        ...state,
        savedFilms: state.savedFilms.filter(film => film.id !== action.payload)
      };
    default:
      return state;
  }
}