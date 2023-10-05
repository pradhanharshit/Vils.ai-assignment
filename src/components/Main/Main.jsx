import Header from "../Header/Header";
import "../Main/Main.css";
import ResultSection from "../ResultSection/ResultSection";
import ScoreSection from "../ScoreSection/ScoreSection";
import WritingSection from "../WritingSection/WritingSection";

const Main = () => {
  return (
    <div className="main" style={{ width: "100%" }}>
      <Header />
      <div className="main-div">
        <div style={{ width: "64%" }}>
          <WritingSection />
          <ScoreSection />
        </div>
        <div style={{ width: "36%", borderLeft: "2px solid #1C98EB" }}>
          <ResultSection />
        </div>
      </div>
    </div>
  );
};

export default Main;
