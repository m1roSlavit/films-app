import React from 'react';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import parseDate from "../../utils/parseDate";
import truncateString from "../../utils/truncateString";
import {ReactComponent  as AdultImg} from './adult.svg';
import {ReactComponent  as GlyphIcon} from './glyphicon.svg';
import './film-card.scss';
import getFilmRateClass from "../../utils/getFilmRateClass";
import SaveButton from "../save-button";

const FilmCard = ({film, genres}) => {

  const {
    id,
    title,
    release_date,
    poster_path,
    vote_average,
    adult,
    vote_count,
    genre_ids,
  } = film;

  const history = useHistory();
  const truncatedTitle = truncateString(title, 25);

  const poster_img = poster_path ? (
    <div className='film-card__bg-img card-img-top' style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/w300${poster_path}')`
    }}
    >
    </div>
  ) : (
    <div className='film-card__glyph'>
      <GlyphIcon width={60} height={60}/>
    </div>
  );

  return (
    <div className="film-card card">
      <div className="film-card__img" onClick={() => history.push(`/movie/${id}`)}>
        { poster_img }
        {
          adult ? (
            <div className='film-card__adult'>
              <AdultImg width={30} height={30}/>
            </div>
          ) : null
        }
        <div className={`film-card__rate badge ${getFilmRateClass(vote_count, vote_average)}`}>
          {vote_count !== 0 ? vote_average : 'N/A'}
        </div>
      </div>
      <div className="card-body p-2 pb-3 flex-column d-flex">
        <Link to={`/movie/${id}`} className="film-card__title-link">
          <h5 className="card-title">{truncatedTitle}</h5>
        </Link>
        <div className='film-card__genres'>
          {
            genre_ids.map(genreId => (
              <span key={genreId} className="badge bg-dark me-1">{genres?.find(({id}) => id === genreId)?.name}</span>
            ))
          }
        </div>
        <div className='d-flex mt-auto justify-content-between align-items-end'>
          <p className="card-text small mb-0">
            {
              release_date ? parseDate(release_date) : 'N/A'
            }
          </p>
          <SaveButton filmData={film}/>
        </div>
      </div>
    </div>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    adult: PropTypes.bool.isRequired,
    vote_count: PropTypes.number.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired
};

export default FilmCard;