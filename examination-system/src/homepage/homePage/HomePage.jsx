import "./homePage.scss"
import HomeSidebar from "../../homepage/homeSidebar/HomeSidebar"
import HomeNavbar from "../../homepage/homeNavbar/HomeNavbar"

const HomePage = () => {
  return (
   <div className="home">
       <HomeSidebar/>
       <div className="homeContainer">
           <HomeNavbar/>
       </div>
   </div>
  )
}

export default HomePage
