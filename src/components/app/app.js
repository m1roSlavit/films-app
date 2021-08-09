import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import {HomePage} from "../pages";
import './app.scss';
import Header from "../header";
import SearchResultPage from "../pages/search-result-page";
import FilmPage from "../pages/film-page";
import MyProfilePage from "../pages/my-profile-page";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/search-result' exact>
          <SearchResultPage />
        </Route>
        <Route path='/movie/:filmId' exact>
          <FilmPage />
        </Route>
        <Route path='/my-profile' exact>
          <MyProfilePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;