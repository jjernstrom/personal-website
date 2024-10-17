import { Container, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import GitHubIcon from "../../assets/navbar/github-logo.svg";
import LinkedInIcon from "../../assets/navbar/linkedin-logo.svg";

const linkStyle = {
  color: "#ebdbb2",
  margin: "auto",
  textDecoration: "none",
};

export const SocialMediaBar = () => {
  return (
    <Stack direction="row" margin="auto" gap={4}>
      <Link href="https://github.com/jjernstrom" display="flex">
        <img
          src={GitHubIcon}
          height={24}
          width={24}
          style={{ margin: "auto" }}
        />
        <Typography color="#ebdbb2" margin="auto" marginLeft={1}>
          GitHub
        </Typography>
      </Link>
      <Link
        href="https://www.linkedin.com/in/jeffrey-jernstrom/"
        display="flex"
      >
        <img
          src={LinkedInIcon}
          height={24}
          width={24}
          style={{ margin: "auto" }}
        />
        <Typography color="#ebdbb2" margin="auto" marginLeft={1}>
          LinkedIn
        </Typography>
      </Link>
    </Stack>
  );
};

export const NavBar = () => {
  return (
    <header>
      <nav>
        <Container maxWidth="lg">
          <Stack direction="row" display="flex" flexWrap="wrap">
            <Stack direction="row" gap={5} display="flex">
              <Typography
                variant="h4"
                color="#ebdbb2"
                margin="auto"
                fontFamily="Courier New"
              >
                jjernstrom
              </Typography>
              <SocialMediaBar />
            </Stack>
            <Stack
              gap={5}
              direction="row"
              justifyContent="right"
              marginLeft="auto"
            >
              <RouterLink to={"/"} style={linkStyle}>
                Home
              </RouterLink>

              <RouterLink to={"/portfolio"} style={linkStyle}>
                Portfolio
              </RouterLink>

              <RouterLink to={"/devlog"} style={linkStyle}>
                DevLog
              </RouterLink>

              <RouterLink to={"/contact"} style={linkStyle}>
                Contact
              </RouterLink>
            </Stack>
          </Stack>
          <hr />
        </Container>
      </nav>
    </header>
  );
};
