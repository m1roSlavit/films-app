import React from 'react';
import FilmDetails from "../film-details";
import FilmRecommendationList from "../film-recommendation-list";
import {useParams} from "react-router-dom";

const FilmPage = () => {
  const filmId = parseInt(useParams().filmId);

  return (
    <div className='film-page'>
      <FilmDetails filmId={filmId}/>
      <FilmRecommendationList filmId={filmId}/>
    </div>
  );
};

export default FilmPage;