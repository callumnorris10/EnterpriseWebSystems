import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1 className="large text-primary">
        <i className="fas fa-info" />
      </h1>
      <p className="large">About Page</p>
      <ul className="list-group">
        <li className="list-group-item">
          This web system is intended to be used by sports coaches to interact
          with one another and share knowledge through a post/comment system/
        </li>
      </ul>
      <ul className="list-group">
        <li className="list-group-item">Technologies used include:</li>
        <li className="list-group-item">
          <a href="https://reactjs.org/">React</a> for the front-end UI
        </li>
        <li className="list-group-item">
          <a href="https://nodejs.org/en/">Node.js</a> for the back end
        </li>
        <li className="list-group-item">
          <a href="https://www.mongodb.com/">MongoDB</a> for the server
        </li>
        <li className="list-group-item">
          <a href="https://expressjs.com/">Express.js</a> to work with node to
          create an API
        </li>
        <li className="list-group-item">
          Myriad other technologies such as axios, redux and UUID were all used
          and are listed in the dependencies of the Github project.
        </li>
      </ul>
    </Fragment>
  );
};

export default About;
