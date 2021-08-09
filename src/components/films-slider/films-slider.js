import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './films-slider.scss';
import FilmCard from "../film-card";

const FilmsSlider = ({films, genres}) => {

  const sliderSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
  };


  return (
    <Slider {...sliderSettings}>
      {
        films.map(film => (
          <FilmCard key={film.id} film={film} genres={genres}/>
        ))
      }
    </Slider>
  );
};

export default FilmsSlider;