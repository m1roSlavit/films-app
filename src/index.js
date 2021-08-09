import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./store";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
