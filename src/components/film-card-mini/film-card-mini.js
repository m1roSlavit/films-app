import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

import './film-card-mini.scss';
import {Link} from "react-router-dom";
import {removeFilm} from "../../store/actions/savedFilmsActions";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";

const FilmCardMini = ({film}) => {

  const dispatch = useDispatch();

  const {
    backdrop_path,
    title,
    id,
  } = film;

  const handleRemoveFilm = () => {
    dispatch(removeFilm(id));
  }

  const bgImgPath = backdrop_path ?
    `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`
    :
    'https://images.wallpaperscraft.com/image/patterns_light_color_texture_50477_1920x1080.jpg';

  return (
    <div className='film-card-mini' style={{backgroundImage: `url(${bgImgPath})`}}>
      <div className="film-card-mini__content py-5 text-center">
        <Link to={`/movie/${id}`}>
          <h4 className='film-card-mini__title'>
            {title}
          </h4>
        </Link>
      </div>
      <button className="film-card-mini__delete" onClick={handleRemoveFilm}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

FilmCardMini.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default FilmCardMini;