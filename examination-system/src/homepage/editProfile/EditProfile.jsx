import "./editProfile.scss"
import HomeSidebar from '../homeSidebar/HomeSidebar'
import HomeNavbar from '../homeNavbar/HomeNavbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";


const EditProfile = ({inputs,title}) => {
    const [file, setFile] = useState("");
  return (
   <div className="editProfile">
       <HomeSidebar/>
       <div className="editProfileContainer">
           <HomeNavbar/>
           <div className="top">
              <h1>Edit Profile</h1>
           </div>
           <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

                <div className="formInput">
                  <label></label>
                  <input type="text" placeholder="fullname"/>
                </div>
                <div className="formInput">
                  <label></label>
                  <input type="text" placeholder="address"/>
                </div>
                <div className="formInput">
                  <label></label>
                  <input type="date" placeholder="birthday"/>
                </div>
                <div className="formInput">
                  <label></label>
                  <input type="text" placeholder="school"/>
                </div>
                <div className="formInput">
                  <label></label>
                  <input type="email" placeholder="email"/>
                </div>
           
              <button>Update</button>
            </form>
          </div>
        </div>
       </div>
   </div>
  )
}

export default EditProfile
