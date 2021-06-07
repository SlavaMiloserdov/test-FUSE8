import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { HomePage, DetailsPage } from '../pages';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/details"
          component={DetailsPage}
          />
      </Switch>
    </div>
  );
}

export default App;
