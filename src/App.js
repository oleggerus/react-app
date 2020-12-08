import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";

import routes from "./routes";
import RouteWithSubRoutes from './routeWithSubRoutes'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/oleh">Oleh</Link>
          </li>
          <li>
            <Link to="/anton">Anton</Link>
          </li>
          <li>
            <Link to="/lessons">Lessons</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
