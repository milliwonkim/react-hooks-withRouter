import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About, Posts } from './pages';
import Menu from './components/Menu';
import ShowPageInfo from './components/ShowPageInfo';


const App = () => {
  return (
    <Router>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/about/:name?" component={About} />
      <Route path="/posts" component={Posts}/>
      <ShowPageInfo />
    </Router>
  );
}

export default App;