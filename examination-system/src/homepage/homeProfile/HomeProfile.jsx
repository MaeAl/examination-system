import "./homeProfile.scss"
import HomeSidebar from '../homeSidebar/HomeSidebar'
import HomeNavbar from '../homeNavbar/HomeNavbar'
import {Link} from "react-router-dom"

const HomeProfile = () => {
  return (
    <div className="homeProfile">
        <HomeSidebar/>
        <div className="homeProfileContainer">
            <HomeNavbar/>
            <div className="top">
         <div className="left">
         <div className="editButton">
         <Link to="/profile/edit_profile" style={{textDecoration:"none"}} className="link">
             Edit
             </Link>
             </div>
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
                 <span className="itemKey">Birthday:</span>
                 <span className="itemValue">November 12, 1999</span>
               </div>
               <div className="detailItem">
                 <span className="itemKey">Address:</span>
                 <span className="itemValue">Meycauayan Bulacan</span>
               </div>
               <div className="detailItem">
                 <span className="itemKey">School:</span>
                 <span className="itemValue">Bulacan State University</span>
               </div>
              </div>
           </div>
         </div>
         <div className="right"></div>
       </div>
        </div>
    </div>
  )
}

export default HomeProfile
