import { SocialMediaWidget } from "../SocialMediaWidget";
import headshot from "../../assets/headshot-2016-transparentBG.png";

export const Profile = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginRight: "10%",
        marginTop: "20px",
      }}
    >
      <div style={{ margin: "auto" }}>
        <div style={{ marginRight: "15%" }}>
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
          <SocialMediaWidget />
        </div>
      </div>
      <div style={{ margin: "auto" }}>
        <img
          src={headshot}
          alt="Profile picture of Jeffrey Jernstrom"
          width={500}
          height={523}
        />
      </div>
    </div>
  );
};
