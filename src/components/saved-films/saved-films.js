import React from 'react';
import FilmCardMini from "../film-card-mini";

import './saved-films.scss';
import {useSelector} from "react-redux";

const SavedFilms = () => {

  const {savedFilms} = useSelector(store => store.savedFilms);

  return (
    <div className='saved-films'>
      <h2>Saved films:</h2>
      <div className="saved-films__list">
        {
          savedFilms.length !== 0 ?
            savedFilms.map(film => (
              <FilmCardMini key={film.id} film={film}/>
            ))
            :
            <p>
              No one saved film
            </p>
        }
      </div>
    </div>
  );
};

export default SavedFilms;