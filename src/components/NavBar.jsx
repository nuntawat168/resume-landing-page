import "../css/NavbarStyle.css";

function NavBar() {
  const handleAboutLinkClick = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleSkillsLinkClick = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };

  const handlePortfolioLinkClick = () => {
    const portfolioSection = document.getElementById("portfolio");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactLinkClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="navbar-brand">
        <p className="text-brand-1">ICE.</p>
        <p className="text-brand-2">NANTAWAT</p>
      </div>
      <ul>
        <li onClick={handleAboutLinkClick}>About</li>
        <li onClick={handleSkillsLinkClick}>Passions</li>
        <li onClick={handlePortfolioLinkClick}>Portfolio</li>
        <li onClick={handleContactLinkClick} className="highlight-text">
          Contact Me
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
