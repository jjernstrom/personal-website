import { Link } from "react-router-dom";

const style = {
  display: "flex",
  justifyContent: "center",
};

const linkBoxStyle = {
  margin: "auto",
};

export const NavBar = () => {
  return (
    <nav>
      <div style={style}>
        <div style={linkBoxStyle}>
          <Link to={"/"}>Home</Link>
        </div>

        <div style={linkBoxStyle}>
          <Link to={"/portfolio"}>Portfolio</Link>
        </div>

        <div style={linkBoxStyle}>
          <Link to={"/devlog"}>DevLog</Link>
        </div>

        <div style={linkBoxStyle}>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};
