import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Main from './component/main.component';
import SingleMovie from './component/singleMovie/singleMovie.component';
import './App.scss';

function App() {



  return (
    <div className="app">
      <Switch>
        <Route exact path='/' render={() => <Main />} />
        <Route exact path='/movie/:movieId' render={(routeProps) => (<SingleMovie movieId={routeProps.match.params.movieId} />)} />
      </Switch>
    </div>

  );
}

export default App;
