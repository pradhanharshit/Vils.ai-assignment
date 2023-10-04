import CompanyLogo from "../../assets/Group 237788.svg";
import Template from "../../assets/sidebar-assets/template.svg";
import Interview1 from "../../assets/sidebar-assets/interview-svgrepo-com 1.svg";
import Chatbot from "../../assets/sidebar-assets/chatbot-icon 1.svg";
import Interview2 from "../../assets/sidebar-assets/interview-svgrepo-com 2.svg";
import Readme from "../../assets/sidebar-assets/readme.svg";
import Group from "../../assets/sidebar-assets/Group.png";
import Settings from "../../assets/sidebar-assets/Settings.svg";
import Crown from "../../assets/sidebar-assets/Crown.svg";
import OnlineCourse from "../../assets/sidebar-assets/online-course-icon 1.svg";
import Resume from "../../assets/sidebar-assets/resume-cv-icon 1.svg";
import User from "../../assets/sidebar-assets/User_01.svg";
import Logout from "../../assets/sidebar-assets/LogOut.svg";

import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <img id="company-logo" src={CompanyLogo} alt="company-logo" />
      <div className="sidebar">
        <div className="sidebar-menu">
          <div className="menu-element">
            <img className="sidebar-logo" src={Template} alt="template" />
            <p>Dashboard</p>
          </div>
          <div className="menu-element">
            <img className="sidebar-logo" src={Interview1} alt="template" />
            <p>1 on 1 mentor</p>
          </div>
          <div className="menu-element">
            <img className="sidebar-logo" src={Chatbot} alt="template" />
            <p>Mock Interviews</p>
          </div>
          <div className="menu-element">
            <img className="sidebar-logo" src={Interview2} alt="template" />
            <p>Practice Test</p>
          </div>
          <div className="menu-element">
            <img className="sidebar-logo" src={Readme} alt="template" />
            <p>Communication</p>
          </div>
          <div className="menu-element active-menu-element">
            <img className="sidebar-logo" src={Group} alt="template" />
            <p>Reports</p>
          </div>
          <div className="menu-element">
            <img className="sidebar-logo" src={Settings} alt="template" />
            <p>Setting</p>
          </div>
          <div className="menu-element">
            <img className="sidebar-logo" src={Crown} alt="template" />
            <p>Premium</p>
          </div>
        </div>
      </div>
      <div className="sidebar-line"></div>
      <div className="sidebar-lower">
        <div>
          <div className="lower-menu-element" style={{ marginBottom: "36px" }}>
            <img className="sidebar-logo" src={Resume} alt="resume" />
            <p>Resume</p>
          </div>
          <div className="lower-menu-element" style={{ marginBottom: "151px" }}>
            <img
              className="sidebar-logo"
              src={OnlineCourse}
              alt="online-course"
            />
            <p>Courses</p>
          </div>
          <div className="user-container">
            <div className="user-div">
              <div className="profile-img" style={{ marginRight: "12px" }}>
                <img src={User} alt="user-profile-img" />
              </div>
              <div>
                <span className="username">Josephine</span>
                <br />
                <span className="username">Langford</span>
              </div>
            </div>
            <img src={Logout} alt="logout-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
