import "./startExam.scss"
import HomeSidebar from '../homeSidebar/HomeSidebar'
import HomeNavbar from '../homeNavbar/HomeNavbar'
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const StartExam = () => {
  return (
   <div className="startExam">
       <HomeSidebar/>
       <div className="startExamContainer">
           <HomeNavbar/>
           <div className="titleContainer">
              <div className="examTitle">Programming Language</div>
           </div>
           <div className="questionContainer">
           <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">1.What is the meaning of db?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="database" control={<Radio />} label="Database" />
        <FormControlLabel value="data" control={<Radio />} label="Data" />
        <FormControlLabel value="databytes" control={<Radio />} label="Databytes" />
        <FormControlLabel value="databoard" control={<Radio />} label="Databoard" />
      </RadioGroup>
    </FormControl>
           </div>

           <div className="questionContainer">
           <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">2. Which programming language is not included?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group">
        <FormControlLabel value="database" control={<Radio />} label="Python" />
        <FormControlLabel value="data" control={<Radio />} label="Java" />
        <FormControlLabel value="databytes" control={<Radio />} label="C##" />
        <FormControlLabel value="databoard" control={<Radio />} label="Html" />
      </RadioGroup>
    </FormControl>
           </div>

           
       </div>
   </div>
  )
}

export default StartExam
