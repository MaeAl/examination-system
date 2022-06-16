import "./homeExam.scss"
import HomeSidebar from '../homeSidebar/HomeSidebar'
import HomeNavbar from '../homeNavbar/HomeNavbar'
import HomeExamTable from "./HomeExamTable"

const HomeExam = () => {
  return (
  <div className="homeExam">
      <HomeSidebar/>
      <div className="homeExamContainer">
          <HomeNavbar/>
          <div className="titleContainer">
            <div className="homeTitle">Available Exams</div>
            <HomeExamTable/>
          </div>
      </div>
  </div>
  )
}

export default HomeExam
