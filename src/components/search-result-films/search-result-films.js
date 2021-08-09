import React from 'react';

import './search-result-films.scss';
import {useDispatch, useSelector} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../spinner";
import FilmsList from "../films-list";
import {fetchSearchFilms} from "../../store/actions/filmActions";

const SearchResultFilms = () => {
  const dispatch = useDispatch();
  const {films, currentPage, totalPages, searchQuery} = useSelector(store => store.film.searchFilms);
  const {genres} = useSelector(store => store.genre.genresList);

  const handleNextPage = () => {
    dispatch(fetchSearchFilms(searchQuery, currentPage + 1));
  }

  return (
    <div>
      <h2 className='mb-4'>Search Films for "{searchQuery}"</h2>
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

export default SearchResultFilms;