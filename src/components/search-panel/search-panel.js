import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import './search-panel.scss';
import {useDispatch} from "react-redux";
import {fetchSearchFilms, searchFilmsReset} from "../../store/actions/filmActions";

const SearchPanel = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="search-panel d-flex">
      <input className="search-panel__input form-control me-sm-2"
             type="text"
             placeholder="Search films"
             value={searchQuery}
             onChange={handleSearchQuery}
      />
      <button className="search-panel__button btn btn-secondary my-2 my-sm-0"
              onClick={() => {
                history.push('/search-result');
                if (searchQuery !== '') {
                  dispatch(searchFilmsReset());
                  dispatch(fetchSearchFilms(searchQuery, 1,));
                }
              }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchPanel;