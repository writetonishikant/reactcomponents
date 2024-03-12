import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Resume from "./Components/Resume";
import AssignmentTwo from './AssignmentTwo'
import classes from "./Card.module.css";

const peopleData = [
  {
    name: "Kamal",
    experience: [
      { year: 2012, company: "ABC Corp", role: "Software Engineer" },
      { year: 2015, company: "XYZ Inc", role: "Front-end Developer" },
      { year: 2018, company: "456 Ltd", role: "Senior Developer" },
    ],
    education: [
      {
        year: 2008,
        school: "University A",
        degree: "Bachelor in Computer Science",
      },
      {
        year: 2011,
        school: "College B",
        degree: "Master in Software Engineering",
      },
    ],
    skills: ["ReactJS", "NodeJS", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Trisha",
    experience: [
      { year: 2013, company: "PQR Corp", role: "Software Engineer" },
      { year: 2016, company: "DEF Inc", role: "Front-end Developer" },
      { year: 2019, company: "789 Ltd", role: "Senior Developer" },
    ],
    education: [
      {
        year: 2009,
        school: "University C",
        degree: "Bachelor in Information Technology",
      },
      { year: 2012, school: "College D", degree: "Master in Computer Science" },
    ],
    skills: ["ReactJS", "Angular", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "John",
    experience: [
      { year: 2018, company: "MSEB Department", role: "Sales Engineer" },
      {
        year: 2019,
        company: "Rajdhani Corp",
        role: "Senior Front-end Developer",
      },
      { year: 2020, company: "Expresso Taj", role: "Web Developer" },
    ],
    education: [
      {
        year: 2007,
        school: "University E",
        degree: "Bachelor in Electrical Engineering",
      },
      {
        year: 2010,
        school: "College F",
        degree: "Master in Business Administration",
      },
    ],
    skills: ["Vue.js", "NodeJS", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Alice",
    experience: [
      { year: 2015, company: "Tech Solutions", role: "Software Developer" },
      { year: 2017, company: "Innovate Corp", role: "Front-end Engineer" },
      { year: 2020, company: "FutureTech Ltd", role: "Lead Developer" },
    ],
    education: [
      {
        year: 2012,
        school: "University G",
        degree: "Bachelor in Computer Science",
      },
      {
        year: 2015,
        school: "College H",
        degree: "Master in Software Engineering",
      },
    ],
    skills: ["JavaScript", "CSS"],
  },
  {
    name: "Bob",
    experience: [
      { year: 2014, company: "Data Analytics Inc", role: "Data Scientist" },
      {
        year: 2016,
        company: "AI Innovations",
        role: "Machine Learning Engineer",
      },
      {
        year: 2019,
        company: "Big Data Solutions",
        role: "Senior Data Engineer",
      },
    ],
    education: [
      {
        year: 2010,
        school: "University I",
        degree: "Bachelor in Computer Science",
      },
      { year: 2013, school: "College J", degree: "Master in Data Science" },
    ],
    skills: ["Python", "Machine Learning"],
  },
];
function App() {
  const skilled = peopleData.filter((person) => person.skills.length > 2); // person having skills more than 2
  const unskilled = peopleData.filter((person) => person.skills.length <= 2); // person having skills less than or equal to 2

  const [displaySkilled, setDisplaySkilled] = useState(true);

  const handleSkilledClick = () => {
    setDisplaySkilled(true);
  };

  const handleUnskilledClick = () => {
    setDisplaySkilled(false);
  };

  const selectedData = displaySkilled ? skilled : unskilled;

  return (
    <div className={classes.app}>
      <div className={classes.skillers}>
        <button onClick={handleSkilledClick}>Skilled</button>
        <button onClick={handleUnskilledClick}>Unskilled</button>
      </div>

      <Tabs>
        <TabList className={classes.tabs}>
          {selectedData.map((person, index) => (
            <Tab key={index}>{person.name}</Tab>
          ))}
        </TabList>

        {selectedData.map((person, index) => (
          <TabPanel key={index}>
            <Resume data={person} />
          </TabPanel>
        ))}
      </Tabs>

      <AssignmentTwo/>
    </div>
  );
}

export default App;