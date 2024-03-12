import React from "react";
import classes from "../Card.module.css";

const Skills = ({ skills }) => {
  return (
    <div className={`${classes.skills} ${classes.common}`}>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className={classes.item}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
