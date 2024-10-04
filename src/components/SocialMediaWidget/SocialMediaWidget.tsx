import linkedinLogo from "../../assets/linkedIn-logo.png";
import githubLogo from "../../assets/github-logo.png";

const widgetStyle = {
  display: "flex",
  justifyContent: "center",
};

const iconStyle = {
  margin: "auto",
};

export const SocialMediaWidget = () => {
  return (
    <div style={widgetStyle}>
      <div style={iconStyle}>
        <a href="https://www.linkedin.com/in/jeffrey-jernstrom/">
          <img
            src={linkedinLogo}
            alt="LinkedIn Profile"
            width={25}
            height={25}
          />
        </a>
      </div>
      <div style={iconStyle}>
        <a href="https://github.com/jjernstrom">
          <img src={githubLogo} alt="GitHub Profile" width={61} height={25} />
        </a>
      </div>
    </div>
  );
};
