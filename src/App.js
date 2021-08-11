import React from 'react';
import Details from './pages/Details';
import Main from './pages/Main';
import { Switch, Route } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
    <>
        <div className="app">
          <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:name" component={Details} />
          <Route  exact path="*" component={ErrorPage} />
          </Switch>
        </div>
    </>
  );
}

export default App;
