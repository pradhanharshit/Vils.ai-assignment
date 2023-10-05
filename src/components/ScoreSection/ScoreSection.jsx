import "../ScoreSection/ScoreSection.css";
// import { CircularProgressbar } from "react-circular-progressbar";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ScoreSection = () => {
  return (
    <div className="score-container">
      <h2 className="score-heading">Management Score:</h2>
      <div className="manag-div">
        <div className="cirprog-div">
          <div style={{ width: 70, height: 70 }}>
            <CircularProgressbarWithChildren
              value={59}
              strokeWidth={15}
              styles={buildStyles({
                // Colors
                pathColor: "#0280D4",
                trailColor: "rgba(149, 212, 254)",
              })}
            >
              <p className="percent-val">59</p>
            </CircularProgressbarWithChildren>
          </div>
          <p className="score-blue">Score: 59%</p>
        </div>
        <div>
          <p className="manag-heading">Focus Management</p>
          <p className="manag-content">
            Focus Score: Focus score refers to the ability of an individual to
            concentrate and direct their attention towards a specific task or
            information.
          </p>
        </div>
      </div>
      <div className="score-line"></div>
      <div className="manag-div">
        <div className="cirprog-div">
          <div style={{ width: 70, height: 70 }}>
            <CircularProgressbarWithChildren
              value={89}
              strokeWidth={15}
              styles={buildStyles({
                // Colors
                pathColor: "rgba(2, 188, 99, 1)",
                trailColor: "rgba(148, 225, 188)",
              })}
            >
              <p className="percent-val">89</p>
            </CircularProgressbarWithChildren>
          </div>
          <p className="score-green">Score: 89%</p>
        </div>
        <div>
          <p className="manag-heading">Time Management</p>
          <p className="manag-content">
            Time Management: Time management is the practice of planning,
            organizing, and allocating time to tasks and activities in a way
            that maximizes productivity and efficiency.
          </p>
        </div>
      </div>
      <div className="score-line"></div>
      <div className="manag-div">
        <div className="cirprog-div">
          <div style={{ width: 70, height: 70 }}>
            <CircularProgressbarWithChildren
              value={39}
              strokeWidth={15}
              className="custom-progress-color"
              styles={buildStyles({
                // Colors
                pathColor: "rgba(235, 87, 87, 1)",
                trailColor: "rgba(225, 169, 169)",
              })}
            >
              <p className="percent-val">39</p>
            </CircularProgressbarWithChildren>
          </div>
          <p className="score-red">Score: 39%</p>
        </div>
        <div>
          <p className="manag-heading">Critical Thinking</p>
          <p className="manag-content">
            Critical thinking is the process of analyzing, evaluating, and
            interpreting information or situations in a logical and systematic
            manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScoreSection;
