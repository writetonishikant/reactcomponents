import React from 'react';
import classes from "../Card.module.css";

const Item = ({ label, value }) => (
    <div className={classes.item}>
      <div className={classes.label}>{label}:</div>
      <div>{value}</div>
    </div>
  );

const Education = ({ education }) => {
  return (
    <div className={`${classes.education} ${classes.common}`}>
      <h2>Education</h2>
      <ul>
        {education.map((item, index) => (
          <li key={index}>
            <Item label="Year" value={item.year} />
            <Item label="School/College" value={item.school} />
            <Item label="Degree" value={item.degree} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;