import NavBar from "./NavBar.jsx";
import "../css/HeaderStyle.css";

function Header() {
  return (
    <>
      <NavBar />
      <div className="header-wrapper">
        <div className="introduce-wrapper">
          <p className="greeting-text">
            Sawadee
            <img
              src="src\assets\background\Ellipse-1.svg"
              className="background-ellipse-1"
            />
          </p>
          <p className="name-and-role-text">
            I'm Nantawat Maliwan <br />a Full-Stack Developer
          </p>
          <p className="introduce-myself">
            Full-Stack developer based in Bangkok, Thailand. <br />I code with a
            focus on cleanliness, precision, and <br />
            continuous learning.
            <img
              src="src\assets\background\Ellipse-2.svg"
              className="background-ellipse-2"
            />
          </p>
        </div>
        <div className="logo-brand-wrapper">
          <img src="src\assets\header\heroImg.svg" className="logo-brand" />
          <img
            src="src\assets\background\Ellipse-3.svg"
            className="background-ellipse-3"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
