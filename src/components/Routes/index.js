import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { UidContext } from "../Contexts/AppContext";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import Users from "../../pages/Users";

const Routes = () => {
  const uid = useContext(UidContext);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        {uid ? (
          <Route path="/users" exact component={Users} />
          ) : (
            <Route path="/users" exact component={Login} />
          )}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
