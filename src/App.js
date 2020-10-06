import React, { createContext, useState } from 'react';
import './app.css';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Events from './components/Events/Events';
import Blog from './components/Blog/Blog';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute.js/PrivateRoute';
import Admin from './components/Admin/Admin';
import AddEvent from './components/Admin/AddEvent';
import VolunteersList from './components/volunteersList/VolunteersList';
import SideBar from './components/Admin/SideBar';
export const UserContext = createContext()
export const TitleContext = createContext();
function App() {
  const [eventTitle, setEventTitle] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <TitleContext.Provider value={[eventTitle,setEventTitle]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/donation">
            <Donation />
          </Route>
          <Route path="/my-events">
            <Events />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
       
          <Route path="/login-page">
            <Login />
          </Route>
          <PrivateRoute path="/admin-panel">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/register/:key">
            <Register />
          </PrivateRoute>
          
          <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </TitleContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
