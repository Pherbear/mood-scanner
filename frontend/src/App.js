import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link, Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import AddReview from "./components/add-review";
import Login from "./components/login";
import Restaurants from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";

function App() {
  const [user, setUser] = React.useState(null)
  const props = useState(null)

  async function login(user = null) {
    setUser(user)
  }

  async function logout(){
    setUser(null)
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          <a className="navbar-title">
            Restaurant Reviews
          </a>
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">     
            { user 
              ? (
                <a onClick={logout} className="nav-link" style={{cursor: 'point'}}>
                  Logout {user.name}
                </a>
              ) : (
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              )}
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact 
            path="/" 
            element = {<RestaurantsList/>} 
            />
          <Route exact 
            path="/restaurants" 
            element = {<RestaurantsList/>} 
            />
          <Route 
            path ="/restaurants/:id/review"
            Component = {(props) => (<AddReview {...props} user={user}/>)}
            />
          <Route
            path = "/restaurants/:id"
            Component = {(props) => (<Restaurants {...props} user={user}/>)}   
            />
          <Route
            path = "/login"
            Component = {(props) => (<Login {...props} login={login} />)}               
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
