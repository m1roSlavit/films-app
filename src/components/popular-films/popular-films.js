import React, {useEffect} from 'react';

import './popular-films.scss';
import FilmsList from "../films-list";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../spinner";
import {useDispatch, useSelector} from "react-redux";
import {fetchPopularFilms, popularFilmsReset} from "../../store/actions/filmActions";
import {fetchGenres} from "../../store/actions/genreActions";

const PopularFilms = () => {
  const dispatch = useDispatch();
  const {films, currentPage, totalPages} = useSelector(store => store.film.popularFilms);
  const {genres} = useSelector(store => store.genre.genresList);

  useEffect(() => {
    dispatch(popularFilmsReset());
    dispatch(fetchPopularFilms());
    dispatch(fetchGenres());
  }, [dispatch]);

  const handleNextPage = () => {
    dispatch(fetchPopularFilms(currentPage + 1));
  }

  return (
    <div>
      <h2 className='mb-4'>Popular Films:</h2>
      <InfiniteScroll
        dataLength={films.length}
        next={handleNextPage}
        hasMore={currentPage < totalPages}
        loader={
          <div className='d-flex justify-content-center mt-4'>
            <Spinner />
          </div>
        }
      >
        <FilmsList films={films} genres={genres}/>
      </InfiniteScroll>
    </div>
  );
};

export default PopularFilms;