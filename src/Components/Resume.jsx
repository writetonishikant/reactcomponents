import React from 'react';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import classes from "../Card.module.css";

const Resume = ({ data }) => {
  return (
    <div className={classes.tabbody}>
      <h1>{data.name}'s Resume</h1>
      <Experience experience={data.experience} />
      <Education education={data.education} />
      <Skills skills={data.skills} />
    </div>
  );
};

export default Resume;