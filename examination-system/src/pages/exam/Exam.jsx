import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./exam.scss"
import Examtable from '../../components/datatable/Examtable'


const Exam = () => {
  return (
  <div className="exam">
      <Sidebar/>
      <div className="examContainer">
          <Navbar/>
          <div className="titleContainer">
            <Examtable/>
          </div>
      </div>
  </div>
  )
}

export default Exam
