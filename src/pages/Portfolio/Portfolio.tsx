import { NavBar } from "../../components/NavBar";
//import { Carousel } from "../../components/Carousel";
import { Container, Stack, Typography } from "@mui/material";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import PersonalWebsiteImage from "../../assets/portfolio/Personal-Website.png";

export const Portfolio = () => {
  return (
    <>
      <title>JJ : Portfolio</title>
      <NavBar />
      <main>
        <Container>
          <Stack>
            <Typography variant="h3" marginTop={4} marginBottom={2}>
              Portfolio
            </Typography>
            <Stack
              direction="row"
              gap={4}
              flexWrap="wrap"
              justifyContent="center"
            >
              <ProjectCard
                title={projects[0].title}
                tag="Game"
                description={projects[0].description}
                image={projects[0].image}
                gitHubLink="https://github.com/jjernstrom/rogue-vivarium"
                websiteLink="http://rogue-vivarium.jjernstrom.com"
              />
              <ProjectCard
                title="Personal Website"
                tag="Website"
                description="This website you're on right now! A minimalist approach a website that serves as a portfolio to my work as an engineer in it's implementation and it's offerings. I've integrated many of the best elements in design an practice from the projects that I have been a part of in my professional career."
                image={PersonalWebsiteImage}
                gitHubLink="https://github.com/jjernstrom/personal-website"
                websiteLink=""
              />
              <ProjectCard
                title={projects[1].title}
                tag="SaaS Platform"
                description={projects[1].description}
                image={projects[1].image}
                gitHubLink="https://github.com/jjernstrom/BrownHopeAidApp"
                websiteLink=""
              />
              <ProjectCard
                title={projects[2].title}
                tag="Library"
                description={projects[2].description}
                image={projects[2].image}
                gitHubLink="https://github.com/jjernstrom/FarOut"
                websiteLink=""
              />
            </Stack>
          </Stack>
        </Container>
        {/* TODO: Is there a better way to get this padding at the bottom of the page? */}
        <div style={{ padding: 20 }} />
      </main>
    </>
  );
};
