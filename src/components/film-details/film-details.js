import React, {useEffect} from 'react';

import './film-details.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchFilm} from "../../store/actions/filmActions";
import Spinner from "../spinner";
import getFilmRateClass from "../../utils/getFilmRateClass";
import parseDate from "../../utils/parseDate";
import SaveButton from "../save-button";
import PropTypes from "prop-types";

const FilmDetails = ({filmId}) => {
  const dispatch = useDispatch();
  const {currentFilm} = useSelector(store => store.film);


  useEffect(() => {
    dispatch(fetchFilm(filmId));
  }, [dispatch, filmId]);

  if (currentFilm.loading || !currentFilm.film) {
    return <Spinner/>;
  }

  const {
    original_title,
    backdrop_path,
    poster_path,
    overview,
    vote_count,
    vote_average,
    tagline,
    genres,
    release_date,
  } = currentFilm.film;

  const bgImgPath = backdrop_path ?
    `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`
    :
    'https://images.wallpaperscraft.com/image/patterns_light_color_texture_50477_1920x1080.jpg';

  return (
    <>
      <div className='film-details mb-5'
           style={{backgroundImage: `url(${bgImgPath})`}}
      >
        <div className="film-details__content py-2">
          <div className="film-details__left-col">
            {
              poster_path ?
                <div className="film-details__img p-4">
                  <img className='rounded-3 border border-secondary border-3' src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt=""/>
                </div>
                :
                null
            }
          </div>
          <div className="film-details__right-col me-3">
            <h2 className="film-details__title">
              {original_title}
            </h2>
            <p>
              <em>
                {tagline}
              </em>
            </p>
            <div className='mb-3'>
              {
                genres?.map(genre => (
                  <span key={genre.id} className="badge bg-light me-1">{genre.name}</span>
                ))
              }
            </div>
            <div className={`film-details__rate py-2 px-3 fs-5 badge ${getFilmRateClass(vote_count, vote_average)}`}>
              {vote_count !== 0 ? vote_average : 'N/A'}
            </div>
            <h4 className='mt-3'>Review:</h4>
            <p>
              {overview}
            </p>
            <p>
              {
                parseDate(release_date)
              }
            </p>
            <SaveButton filmData={currentFilm.film}/>
          </div>
        </div>
      </div>
    </>
  );
};

FilmDetails.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default FilmDetails;