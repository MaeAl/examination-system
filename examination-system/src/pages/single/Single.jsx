import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const Single = () => {
  return (
   <div className="single">
     <Sidebar/>
     <div className="singleContainer">
       <Navbar/>
       <div className="top">
         <div className="left">
         {/* <div className="editButton">Edit</div> */}
           <h1 className="title">Information</h1>
           <div className="item">
             <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="" 
              className="itemImg"/>
              <div className="details">
               <h1 className="itemTitle">John Rommel</h1>
               <div className="detailItem">
                 <span className="itemKey">Email:</span>
                 <span className="itemValue">roverorommel12@gmail.com</span>
               </div>
               <div className="detailItem">
                 <span className="itemKey">Mobile Number:</span>
                 <span className="itemValue">09959834359</span>
               </div>
               <div className="detailItem">
                 <span className="itemKey">Address:</span>
                 <span className="itemValue">Meycauayan Bulacan</span>
               </div>
               <div className="detailItem">
                 <span className="itemKey">Course:</span>
                 <span className="itemValue">Information Technology</span>
               </div>
              </div>
           </div>
         </div>
         <div className="right"></div>
       </div>
       <div className="bottom">
       <h1 className="title">Student Information</h1>
       <Datatable/>
       </div>
     </div>
   </div>
  )
}

export default Single
