import { Container, Typography } from '@mui/material';
import { NavBar } from '../../components/NavBar';

export const Contact = () => {
  return (
    <>
      <head>
        <title>JJ : Contact</title>
      </head>
      <body>
        <NavBar />
        <main>
          <Container>
            <Typography variant="h3" marginTop={4} marginBottom={2}>
              Contact
            </Typography>
            <Typography variant="h5">Coming soon!</Typography>
          </Container>
        </main>
      </body>
    </>
  );
};
