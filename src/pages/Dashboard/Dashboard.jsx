import Main from "../../components/Main/Main";
import Sidebar from "../../components/Sidebar/Sidebar";

import "../Dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-div">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
