import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./newExam.scss"

const NewExam = () => {
  return (
   <div className="newExam">
       <Sidebar/>
       <div className="newExamContainer">
           <Navbar/>
           <div className="newExamInfo">
           <h1>Add Exam</h1>
           </div>
           <div className="left">
            <div className="leftForm">
            <div className="leftTitle">
              Exam information
            </div>
            <br />
              <form action="">
                <label htmlFor="">Subject</label>
              <select name="List of Subject" id="" value='List of Subject'>
                <option value="Programming Language">Programming Language</option>
                <option value="Hardware">Hardware</option>
                <option value="Web System and Technologies">Web System and Technologies</option>
              </select>

              <label htmlFor="">Exam description</label>
              <input type="text" placeholder='Exam Description'/>
              <label htmlFor="">Question Limit</label>
              <input type="text" placeholder='Question Limit'/>

              <button>Add</button>
              </form>
            </div>
        </div>
       </div>
   </div>
  )
}

export default NewExam
