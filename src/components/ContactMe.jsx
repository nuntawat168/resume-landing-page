import "../css/ContentStyle.css";
import "../css/ContactMeStyle.css";

function ContactMe() {
  const githubProfileURL = "https://github.com/nuntawat168";
  const instagramProfileURL = "https://www.instagram.com/ice.nuntaw/";
  return (
    <div className="content-wrapper">
      <div className="content-title-wrapper">
        <p className="content-title-text-1">Contact</p>
        <p className="content-title-text-2">Me</p>
      </div>
      <div className="contact-me-box-wrapper">
        <a
          href={githubProfileURL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <div className="contact-me-box">
            <img src="src\assets\content\github-logo.svg" alt="github logo" />
            <p className="contact-title">Github</p>
          </div>
        </a>

        <a
          href={instagramProfileURL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <div className="contact-me-box">
            <img
              src="src\assets\content\instagram-logo.svg"
              alt="instagram logo"
            />
            <p className="contact-title">Instagram</p>
          </div>
        </a>

        <div
          className="contact-me-box"
          onClick={() => {
            alert("Email: nuntawat_168@outlook.com");
          }}
        >
          <img src="src\assets\content\e-mail-logo.svg" alt="e-mail logo" />
          <p className="contact-title">Email</p>
        </div>

        <div
          className="contact-me-box"
          onClick={() => {
            alert("Call: (+66)92-920-0081");
          }}
        >
          <img
            src="src\assets\content\telephone-logo.svg"
            alt="telephone logo"
          />
          <p className="contact-title">Telp</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
