import React from 'react';
import { Header } from './shared/Header/Header';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Statistics } from './pages/Statistics/Statistics';


function App() {
  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/statistics" exact component={Statistics} />
      </Switch>
    </div>
  );
}

export default App;
