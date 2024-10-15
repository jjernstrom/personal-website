import { Container, Stack } from "@mui/material";
import { NavBar } from "../../components/NavBar";
import { useLoaderData, useParams } from "react-router-dom";
import { ReactElement } from "react";

export const Article = () => {
  const params = useParams();

  const article: ReactElement = useLoaderData() as ReactElement;

  return (
    <Stack gap={20}>
      <NavBar />
      <div id={params.articleId} style={{ margin: "auto" }}>
        <Container>{article}</Container>
      </div>
    </Stack>
  );
};
