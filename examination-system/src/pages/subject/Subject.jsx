import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./subject.scss"
import SubjectTable from '../../components/datatable/SubjectTable'
import NewSubject from '../new/NewSubject'

const Subject = () => {
  return (
  <div className="subject">
    <Sidebar/>
    <div className="subjectContainer">
      <Navbar/>
      <div className="leftContainer">
        <SubjectTable/>
      </div>
      <div className="rightContainer">
       <NewSubject/>
      </div>
    </div>
  </div>
  )
}

export default Subject
