import "../css/ContentStyle.css";
import "../css/SkillsStyle.css";

function Skills() {
  return (
    <div className="content-wrapper">
      <div className="content-title-wrapper">
        <p className="content-title-text-1">Additional</p>
        <p className="content-title-text-2">passions</p>
      </div>
      <div className="content-box-wrapper">
        <div className="content-box content-skill">
          <img
            src="src\assets\content\font-end-dev-icon.svg"
            alt="font-end developer icon"
            className="skill-icon"
          />
          <div className="skill-title-wrapper">
            <p className="skill-title-1">Front-End</p>
            <p className="skill-title-2">Developer</p>
          </div>
          <p className="skill-detail">(HTML, CSS, Tailwind, React)</p>
          <img
            src="src\assets\background\Ellipse-5.svg"
            className="background-ellipse-5"
          />
        </div>
        <div className="content-box content-skill">
          <img
            src="src\assets\content\back-end-dev-icon.svg"
            alt="font-end developer icon"
            className="skill-icon"
          />
          <div className="skill-title-wrapper">
            <p className="skill-title-1">Back-End</p>
            <p className="skill-title-2">Developer</p>
          </div>
          <p className="skill-detail">(Node.js, Express.js, SQL)</p>
          <img
            src="src\assets\background\Ellipse-4.svg"
            className="background-ellipse-4"
          />
        </div>
        <div className="content-box content-skill">
          <img
            src="src\assets\content\ux-ui-design-icon.svg"
            alt="font-end developer icon"
            className="skill-icon"
          />
          <div className="skill-title-wrapper">
            <p className="skill-title-1">UI/UX</p>
            <p className="skill-title-2">Designer</p>
          </div>
          <p className="skill-detail">(Figma, Zeplin, Adobe XD)</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
