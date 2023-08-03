import "../css/ContentStyle.css";
import "../css/PortfolioStyle.css";

function Portfolio() {
  return (
    <div className="content-wrapper">
      <div className="content-title-wrapper">
        <p className="content-title-text-1">My</p>
        <p className="content-title-text-2">Portfolio</p>
      </div>
      <div className="content-box-wrapper">
        <div className="content-box content-portfolio">
          <img
            src="src\assets\content\e-sendpay-project-logo.svg"
            alt="e-sendpay project logo"
            className="project-logo"
          />
          <img
            src="src/assets/content/e-sendpay-project-img.svg"
            alt="e-sendpay project image"
            className="project-img"
          />
          <img
            src="src\assets\content\e-sendpay-project-ellipse.svg"
            className="project-ellipse"
          />
          <img
            src="src\assets\background\Ellipse-6.svg"
            className="background-ellipse-6"
          />
        </div>
        <div className="content-box content-portfolio">
          <img
            src="src\assets\content\e-commerce-project-logo.svg"
            alt="e-commerce project logo"
            className="project-logo"
          />
          <img
            src="src\assets\content\e-commerce-project-img.svg"
            alt="e-commerce project image"
            className="project-img"
          />
          <img
            src="src\assets\content\e-commerce-project-ellipse.svg"
            className="project-ellipse"
          />
        </div>
        <div className="content-box content-portfolio">
          <img
            src="src\assets\content\beats-learning-project-logo.svg"
            alt="beats-learning project logo"
            className="project-logo"
          />
          <img
            src="src\assets\content\beats-learning-project-img.svg"
            alt="beats-learning project image"
            className="project-img"
          />
          <img
            src="src\assets\content\beats-learing-ellipse.svg"
            className="project-ellipse"
          />
          <img
            src="src\assets\background\Ellipse-7.svg"
            className="background-ellipse-7"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
