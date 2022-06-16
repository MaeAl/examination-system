import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import "./home.scss"
import Tables from '../../components/table/Tables'



const Home = () => {
  return (
    <div className='home'>
     <Sidebar/>
     <div className="homeContainer">
       <Navbar/>
      <div className="widgets">
        <Widget type = "course"/>
        <Widget type = "exam"/>
        <Widget type = "student"/>
      </div>
      <div className="listContainer">
        <div className="listTitle"> Examination Results </div>
        <Tables/>
      </div>

     </div>
    </div>
  )
}

export default Home
