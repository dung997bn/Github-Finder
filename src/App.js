import React, { useState, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import SingleUser from './components/users/SingleUser';
import Seach from './components/users/Seach';
import About from './components/pages/About';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//reducer

import GithubState from './context/github/GithubState';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //Get User Repos
  const getUserRepos = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    setRepos(res.data);
    setLoading(false);
  };
  //Get single Github User

  //Search github User

  //Clear users

  //Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Seach setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                path='/user/:login'
                render={props => (
                  <SingleUser
                    {...props}
                    getUserRepos={getUserRepos}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
