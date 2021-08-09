import React, {useEffect} from 'react';
import Spinner from "../spinner";
import FilmsSlider from "../films-slider";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilmRecommendations} from "../../store/actions/filmActions";
import {fetchGenres} from "../../store/actions/genreActions";
import PropTypes from "prop-types";

const FilmRecommendationList = ({filmId}) => {
  const dispatch = useDispatch();
  const genresList = useSelector(store => store.genre.genresList);
  const {filmRecommendations} = useSelector(store => store.film);

  useEffect(() => {
    dispatch(fetchFilmRecommendations(filmId));
    dispatch(fetchGenres());
  }, [dispatch, filmId]);

  if (filmRecommendations.loading)
    return <Spinner />

  if (filmRecommendations.films.length === 0)
    return null

  return (
    <div>
      <h3 className='mb-4'>Film Recommendations:</h3>
      <div className='mb-5'>
        <FilmsSlider films={filmRecommendations.films} genres={genresList.genres}/>
      </div>
    </div>
  );
};

FilmRecommendationList.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default FilmRecommendationList;