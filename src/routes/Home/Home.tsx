import { Link } from "react-router-dom";
import headshot from "../../assets/headshot-2016.jpg";
import linkedinLogo from "../../assets/linkedIn-logo.png";
import githubLogo from "../../assets/github-logo.png";

export const Home = () => {
  return (
    <>
      <title>Jeffrey Jernstrom: Software Engineer</title>
      <header>
        <nav>
          <div>
            <Link to={"/"}> Home </Link>
            <Link to={""}> Portfolio </Link>
            <Link to={""}> DevLog </Link>
            <Link to={""}> Contact </Link>
          </div>
        </nav>
      </header>
      {/*TODO: <main style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}> */}
      <main>
        <section>
          <h1>Jeffrey Jernstrom</h1>
          <h2>Software Engineer</h2>
          <p>
            I have 3 years experience as a software engineer, primarily as a
            Full-Stack Engineer writing ETLs, GraphQL APIs, and UI components
            for SAAS platforms in a Java Spring Boot backend and React
            Typescript frontend. I have a bachelor's in Computer Science from
            Portland State University where I excelled as a capstone team lead,
            teaching assistant, and software engineering intern. With 8 years of
            experience programming in various languages I embrace a spirit of
            craftsmanship in writing clean, efficient, and scalable code. I
            thrive on technical challenges, communication, and agile teams.
          </p>
          <div>
            <a href="https://www.linkedin.com/in/jeffrey-jernstrom/">
              <img
                src={linkedinLogo}
                alt="LinkedIn Profile"
                width={25}
                height={25}
              />
            </a>
            <a href="https://github.com/jjernstrom">
              <img
                src={githubLogo}
                alt="GitHub Profile"
                width={61}
                height={25}
              />
            </a>
          </div>
        </section>
        <section>
          <img src={headshot} />
        </section>
      </main>
    </>
  );
};
