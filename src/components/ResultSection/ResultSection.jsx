import "../ResultSection/ResultSection.css";
import PieChart from "../../assets/Group 237814.png";

const ResultSection = () => {
  return (
    <div>
      <div className="result-header">
        <p className="result">Results</p>
      </div>
      <div
        style={{
          padding: "20px 35px 0px 30px",
          marginBottom: "20px",
          borderLeft: "2px solid #1C98EB",
        }}
      >
        <div>
          <p className="result2">Results</p>
          <p className="result-score">Score: 74%</p>
        </div>
        <div className="pie-div">
          <img src={PieChart} alt="piechart" width="220px" height="220px" />
          <div>
            <div style={{ display: "flex" }}>
              <div
                className="result-color-div"
                style={{ backgroundColor: "#235784" }}
              ></div>
              <span className="pie-descp">Correct Answer</span>
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="result-color-div"
                style={{ backgroundColor: "#BCDBDF" }}
              ></div>
              <span className="pie-descp">Not Answered</span>
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="result-color-div"
                style={{ backgroundColor: "#40A8C4" }}
              ></div>
              <span className="pie-descp">Wrong</span>
            </div>
          </div>
        </div>
        <div className="table-container">
          <div className="results">
            <div className="analysis">Analysis</div>
            <div className="border"></div>
            <div className="correct">
              <div className="correct-answers">Correct Answers:</div>
              <div className="correct-answers-val">9</div>
            </div>
            <div className="border"></div>
            <div className="wrong">
              <div className="correct-answers1">Wrong Answers:</div>
              <div className="correct-answers-val1">1</div>
            </div>
            <div className="border"></div>
            <div className="wrong">
              <div className="correct-answers2"> Unaswered:</div>
              <div className="correct-answers-val1">1</div>
            </div>
            <div className="border"></div>
            <div className="wrong3">
              <div className="correct-answers3"> Skiped:</div>
              <div className="correct-answers-val1">0</div>
            </div>
            <div className="border-cut"></div>
            <div className="wrong3">
              <div className="correct-answers4"> Out of time:</div>
              <div className="correct-answers-val1">0</div>
            </div>
            <div className="border-cut"></div>
            <div className="wrong1">
              <div className="correct-answers5">Time used:</div>
              <div className="correct-answers-val1">2:30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSection;
