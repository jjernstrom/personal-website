import { Link, Stack, Typography } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import SaveIcon from "@mui/icons-material/Save";
import Rogue from "../../../assets/portfolio/AI-rogue-vivarium.png";
import { ReactNode } from "react";
import { ArticleTitle } from "../../../components/ArticleTitle";
import { Spacing } from "../../../theme";

const data = {
  title: "Announcing Rogue Vivarium",
  tag: "Software Engineering",
  date: "October 14, 2024",
  author: "JJernstrom",
  content:
    "This is the first sentence. This is so much to read why do I even bother writing all \
    of this stuff like this. Maybe one day we can have nice things, but for now we will \
    just have to make due.",
};

export const ShareToolbar = () => {
  return (
    <>
      {/* <hr style={{ width: "100%" }} /> */}
      <Stack direction="row" gap={2}>
        <Link underline="none" color="#ebdbb2" display="flex">
          <Typography
            fontFamily="Courier"
            variant="caption"
            color="#ebdbb2"
            margin="auto"
          >
            Share
          </Typography>
          <IosShareIcon style={{ marginLeft: 4 }} />
        </Link>
        <Link underline="none" color="#ebdbb2" display="flex">
          <Typography
            fontFamily="Courier"
            variant="caption"
            color="#ebdbb2"
            margin="auto"
          >
            Save
          </Typography>
          <SaveIcon style={{ marginLeft: 4 }} />
        </Link>
      </Stack>
    </>
  );
};

interface ArticleHeadingProps {
  children: ReactNode;
}
export const ArticleBody = ({ children }: ArticleHeadingProps) => {
  return (
    <Typography
      marginTop={2}
      marginBottom={2}
      variant="body1"
      fontSize="20px"
      fontFamily="Georgia"
    >
      {children}
    </Typography>
  );
};

export const RogueLog1 = () => {
  return (
    <Stack display="flex" maxWidth={Spacing.article} gap={2}>
      <ArticleTitle
        title={data.title}
        subTitle=""
        tag={data.tag}
        date={data.date}
        author={data.author}
      />
      <Typography>
        I'd like to introduce a new project I've started:{" "}
        <Link href="http://rogue-vivarium.jjernstrom.com">Rogue Vivarium</Link>!
      </Typography>
      <Typography>
        <strong>The idea:</strong> A simple rogue-lite in the context of a
        virtual ecosystem. Development is focused on exploring procedural
        generation techniques, agent-based modeling, and user interactivity in a
        2D space.
      </Typography>
      <Typography>
        <strong>The execution:</strong> Through the development of this project
        I'll be touching on security considerations, architecture choices, and
        various wins and setbacks. The goal is not only to have a cool
        full-stack web application that I can show off on my portfolio, but also
        to challenge myself to explore new techniques and skills with a focus on
        modern development and security practices.
      </Typography>
      <Typography>
        I'm excited to bring together interests that have been brewing for quite
        some time and apply the engineering skills and best practices that I've
        cultivated from diligent study and expert mentorship.
      </Typography>
      <Typography variant="h5">Overview</Typography>
      <Typography>
        A rogue-lite is a game that some characterize as a Procedural Death
        Labyrinth that makes strong use of procedural generation, a strong
        player-character death penalty, and takes place in a semi-contained
        environment. A vivarium is literally a "place of life" and commonly
        understood as: "an area, usually enclosed, for keeping and raising
        animals or plants for observation or research" (Wikipedia). This project
        seeks to combine the two concepts as a laboratory in procedural
        generation techniques, agent-base modeling, and user interaction in 2D
        space.
      </Typography>
      <img src={Rogue} style={{ marginTop: 2, maxWidth: "100%" }} />
      <div style={{ padding: 20 }} />
    </Stack>
  );
};
