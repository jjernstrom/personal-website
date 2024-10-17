import { ArticleCard } from "../../components/ArticleCard";
import RogueVivariumImage from "../../assets/portfolio/AI-rogue-vivarium.png";
import { NavBar } from "../../components/NavBar";
import { Container, Stack, Typography } from "@mui/material";
import { RogueLog2Data } from "./Articles/RogueLog2";

const RogueLog1Data = {
  title: "New Project: Rogue Vivarium!",
  subTitle: "Rogue Vivarium: Part 1",
  navTitle: "RogueLog1",
  description:
    "I'm very excited to bring together interests that have been brewing for quite some time and apply the engineering skills and best practices that I've cultivated from diligent study and expert mentorship.",
  image: RogueVivariumImage,
  tag: "Software Engineering",
};

export const DevLog = () => {
  return (
    <>
      <head>
        <title>JJ : DevLog</title>
      </head>
      <body>
        <NavBar />
        <main>
          <Container>
            <Typography variant="h3" marginTop={4} marginBottom={2}>
              DevLog
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={2}>
              <ArticleCard {...RogueLog1Data} />
              <ArticleCard {...RogueLog2Data} />
            </Stack>
          </Container>
        </main>
      </body>
    </>
  );
};
