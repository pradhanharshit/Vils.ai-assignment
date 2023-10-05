import "../ResultSection/ResultSection.css";
import PieChart from "../../assets/Group 237814.png";

const ResultSection = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="arrow-div">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_0_277"
            style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="25"
            height="24"
          >
            <rect x="0.25" width="24.4007" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_0_277)">
            <path
              d="M10.7227 19.3008C10.5363 19.1174 10.4388 18.8841 10.4304 18.6008C10.4219 18.3174 10.5108 18.0841 10.6972 17.9008L15.679 13.0008H4.31748C4.02941 13.0008 3.78795 12.9049 3.59308 12.7133C3.39821 12.5216 3.30078 12.2841 3.30078 12.0008C3.30078 11.7174 3.39821 11.4799 3.59308 11.2883C3.78795 11.0966 4.02941 11.0008 4.31748 11.0008H15.679L10.6972 6.10078C10.5108 5.91745 10.4219 5.68411 10.4304 5.40078C10.4388 5.11745 10.5363 4.88411 10.7227 4.70078C10.909 4.51745 11.1463 4.42578 11.4343 4.42578C11.7224 4.42578 11.9596 4.51745 12.146 4.70078L18.8562 11.3008C18.9579 11.3841 19.0299 11.4883 19.0723 11.6133C19.1146 11.7383 19.1358 11.8674 19.1358 12.0008C19.1358 12.1341 19.1146 12.2591 19.0723 12.3758C19.0299 12.4924 18.9579 12.6008 18.8562 12.7008L12.146 19.3008C11.9596 19.4841 11.7224 19.5758 11.4343 19.5758C11.1463 19.5758 10.909 19.4841 10.7227 19.3008Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
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
