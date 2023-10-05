import "../WritingSection/WritingSection.css";

const WritingSection = () => {
  return (
    <>
      <div className="content-div">
        <p className="content-heading">Your Answer:</p>
        <p className="writing-content">
          The most challenging software for me is specifically to be
          specifically Telluride is Figma. Yeah. Figma and Adobe Illustrator,
          which is, uh, they are quite
          <span style={{ color: "white", backgroundColor: "#DCA11D" }}>
            {" "}
            nuance and
          </span>{" "}
          all the constraints and, uh spill small, small things that needs to be
          learned up. Yeah. This question, it almost took{" "}
          <span style={{ color: "white", backgroundColor: "#E26161" }}>
            three to four
          </span>{" "}
          months to{" "}
          <span style={{ color: "white", backgroundColor: "#1C98EB" }}>
            complete
          </span>{" "}
          a entire software of the Adobe Illustrator.
        </p>
        <p className="writing-content">
          The most challenging software for me is specifically to be
          specifically Telluride is Figma. Yeah. Figma and Adobe Illustrator,
          which is, uh, they are quite nuance and all the constraints and, uh
          spill small, small things that needs to be learned up. Yeah. This
          question, it almost took three to four months to complete a entire
          software of the Adobe Illustrator.
        </p>

        <p className="writing-content">
          The most challenging software for me is specifically to be
          specifically Telluride is Figma. Yeah. Figma and Adobe Illustrator,
          which is, uh, they are quite nuance and all the constraints and, uh
          spill small, small things that needs to be learned up.
        </p>
      </div>
      <div className="mistake-conatiner">
        <div className="mistake-div">
          <div className="color-div div-red"></div>
          <span className="mistakes">Grammatical error</span>
        </div>
        <div className="mistake-div">
          <div className="color-div div-yellow"></div>
          <span className="mistakes">Vocabulary error</span>
        </div>
        <div className="mistake-div" style={{ marginRight: "85px" }}>
          <div className="color-div div-blue"></div>
          <span className="mistakes">Spelling error</span>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default WritingSection;
