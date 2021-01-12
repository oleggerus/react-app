import React from "react";

import { Switch, Link } from "react-router-dom";

import RouteWithSubRoutes from "../../routeWithSubRoutes";

const Lessons = ({ routes }) => {
  return (
    <div>
      <h2>Lessons</h2>
      <ul>
        <li>
          <Link to="/lessons/lesson1">Lesson 1</Link>
        </li>
        <li>
          <Link to="/lessons/lesson2">Lesson 2</Link>
        </li>
        <li>
          <Link to="/lessons/lesson3">Lesson 3</Link>
        </li>
        <li>
          <Link to="/lessons/lesson4">Lesson 4</Link>
        </li>
        <li>
          <Link to="/lessons/lesson5">Lesson 5</Link>
        </li>
        <li>
          <Link to="/lessons/lesson6">Lesson 6</Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default Lessons;
