import { ReactElement } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import { NavBar } from '../../components/NavBar';

export const Article = () => {
  const params = useParams();
  const article: ReactElement = useLoaderData() as ReactElement;

  return (
    <Stack gap={8}>
      <NavBar />
      <Container sx={{ id: params.articleId, display: 'flex', justifyContent: 'center' }}>
        {article}
      </Container>
    </Stack>
  );
};
