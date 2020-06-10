import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

// components
import Main from './components/introduction/Introduction';
import Help from './components/help/Help';
import AddIdeas from './components/addideas/AddIdeas';
import NotFound from './components/notfound/NotFound';
import TimeLine from './components/stats/TimeLine';

import { ToastContainer } from 'react-toastify';

// styling
import './App.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Router>
        <div className="nav-container">
          <div className="list-item empty "></div>
          <div className="title" />

          <div className="empty-bigger" />

          <div className="homeWrapper">
            {' '}
            <NavLink className="home" to="/">
              home
            </NavLink>
          </div>
          <div className="homeWrapper">
            {' '}
            <NavLink className="home" to="/stats">
              stats
            </NavLink>
          </div>
          <div className="helpWrapper">
            <NavLink className="help" to="/help">
              how to help
            </NavLink>
          </div>

          <div className="ideaWrapper">
            <NavLink className="idea" to="/add-ideas">
              share your <br /> ideas!
            </NavLink>
          </div>
          <a
            className="portfolio"
            href=" https://maja-gach-portfolio.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="empty-two" />
          </a>
        </div>
        <Switch>
          <Route exact path="/help" component={Help}></Route>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/stats" component={TimeLine}></Route>
          <Route
            path="/add-ideas"
            render={(props) => <AddIdeas {...props} />}
          />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
