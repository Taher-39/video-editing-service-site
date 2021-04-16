import React, { createContext, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import './App.css'
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Review from "./components/Dashboard/Review/Review";
import Orders from "./components/Admin/Orders/Orders";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import AddService from "./components/Admin/AddService/AddService";
import ManageServices from "./components/Admin/ManageServices/ManageServices";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import Book from "./components/Dashboard/Book/Book";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/orders'>
            <Orders></Orders>
          </Route>
          <Route path='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path='/addService'>
            <AddService></AddService>
          </Route>
          <Route path='/manageServices'>
            <ManageServices></ManageServices>
          </Route>
          <PrivateRoute path="/service/:id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;