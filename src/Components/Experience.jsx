import React from 'react';
import classes from "../Card.module.css";

const Item = ({ label, value }) => (
  <div className={classes.item}>
    <div className={classes.label}>{label}:</div>
    <div>{value}</div>
  </div>
);

const Experience = ({ experience }) => {
  return (
    <div className={`${classes.experience} ${classes.common}`}>
      <h2>Experience</h2>
      <ul>
        {experience.map((item, index) => (
          <li key={index}>
            <Item label="Year" value={item.year} />
            <Item label="Company" value={item.company} />
            <Item label="Role" value={item.role} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;