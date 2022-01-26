import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';


function App() {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <Router>
    <div className="App">
      <nav>
        <Link to='/login'>Login</Link>
        { isLoggedIn && <Link to='/friends'>Friends List</Link>}
        { isLoggedIn && <Link to='/friends/add'>Add Friends</Link>}
        { isLoggedIn && <Link to='/logout'>Logout</Link>}
      </nav>
      <Route exact path='/'>
        <Login />
      </Route>

      <Route exact path='/login'>
        <Redirect to="/"/>
      </Route>

      <PrivateRoute exact path='/friends' component={FriendsList} />
      <PrivateRoute exact path='/friends/add' component={AddFriends} />
      <PrivateRoute exact path='/logout' component={Logout} />
    </div>
    </Router>
  );
}

export default App;
