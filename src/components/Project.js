import React from 'react';
import './Project.css';

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      <div className="project">
        <h3>Human Activity Tracker</h3>
        <p>human activity tracker using the MERN stack is a web application designed to monitor and 
        record various activities performed by individuals The mern stack consists of MongoDB Expressjs React
         and Nodejs Heres a brief overview of how each component contributes to project</p>
      </div>
      <div className="Online voting System">
        <h3>Project Two</h3>
        <p>Online voting system using the MERN stack is a web application designed to monitor and 
        record various activities performed by individuals The mern stack consists of MongoDB Expressjs React
         and Nodejs Heres a brief overview of how each component contributes to project</p>
      </div>
      <div className="project">
        <h3>Project Three</h3>
        <p>A brief description of project three.</p>
      </div>
    </div>
  </section>
);

export default Projects;
