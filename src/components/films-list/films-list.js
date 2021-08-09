import React from 'react';
import FilmCard from "../film-card";

import './films-list.scss';
import PropTypes from "prop-types";

const FilmsList = ({films, genres}) => {
  return (
    <div className='films-list'>
        {
          films.map(film => (
            <FilmCard key={film.id} film={film} genres={genres}/>
          ))
        }
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    adult: PropTypes.bool.isRequired,
    vote_count: PropTypes.number.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  })).isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired
};

export default FilmsList;