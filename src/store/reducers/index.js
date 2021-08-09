import filmReducers from "./filmReducers";
import {combineReducers} from "redux";
import {genreReducers} from "./genreReducers";
import {savedFilmsReducers} from "./savedFilmsReducers";

const rootReducers = combineReducers({
  film: filmReducers,
  genre: genreReducers,
  savedFilms: savedFilmsReducers,
});

export default rootReducers;