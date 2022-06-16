import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./manageExam.scss"
import {Link} from "react-router-dom"

const ManageExam = () => {
  return (
  <div className="manageExam">
      <Sidebar/>
      <div className="manageExamContainer">
          <Navbar/>
          <div className="examInfo">
          <h1>Manage Exam</h1>
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

              <button>Update</button>
              </form>

            </div>
                 

            </div>
              <div className="right">
             <div className="rightForm">
             <div className="rightTitle">
              Add Questions
              <Link to="add_question" style={{textDecoration:"none"}} className="link">
                    Add new
                </Link>
            </div>
            <div className="rightContainer">
              <p>1. What is the Meaning of db?</p>
           <div>
             <input type="radio" name="database" value="database" checked/>
             <label htmlFor="">database</label>
           </div>
           <div>
             <input type="radio" name="data" value="data" disabled/>
             <label htmlFor="">data</label>
           </div>
           <div>
             <input type="radio" name="databytes" value="databytes" disabled/>
             <label htmlFor="">databytes</label>
           </div>
           <div>
             <input type="radio" name="databoard" value="databoard" disabled/>
             <label htmlFor="">databoard</label>
           </div>
           <br />
           <button>update</button>
           <button>delete</button>

            </div>

            
             </div>

              </div>
      </div>
  </div>
  )
}

export default ManageExam
