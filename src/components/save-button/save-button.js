import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

import './save-button.scss';
import {useDispatch, useSelector} from "react-redux";
import {removeFilm, saveFilm} from "../../store/actions/savedFilmsActions";
import PropTypes from "prop-types";

const SaveButton = ({filmData}) => {
  const dispatch = useDispatch();
  const {savedFilms} = useSelector(store => store.savedFilms);

  const handleSaveFilm = () => {
    dispatch(saveFilm(filmData));
  }

  const handleRemoveFilm = () => {
    dispatch(removeFilm(filmData.id));
  }

  const isSaved = ~savedFilms.findIndex(({id}) => id === filmData.id);

  const clazz = isSaved ? 'save-button_saved' : '';

  return (
    <button onClick={isSaved ? handleRemoveFilm : handleSaveFilm} className={`save-button ${clazz}`}>
      <FontAwesomeIcon icon={faHeart}/>
    </button>
  );
};

SaveButton.propTypes = {
  filmData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default SaveButton;