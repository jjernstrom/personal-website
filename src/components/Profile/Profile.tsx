import { Container, Stack, Typography } from '@mui/material';
import headshot from '../../assets/profile/headshot-2016-transparentBG.png';
import { Spacing } from '../../theme';

export const Profile = () => {
  return (
    <Container>
      <Stack direction="row" display="flex" justifyContent="center" flexWrap="wrap" marginTop={10} gap={4}>
        <Stack maxWidth={Spacing.article} gap={2} margin="auto">
          <Typography variant="h3">Jeffrey Jernstrom</Typography>
          <Typography variant="h5">Software Engineer</Typography>
          <Typography>
            I have 3 years experience as a software engineer, primarily as a Full-Stack Engineer writing ETLs,
            GraphQL APIs, and UI components for SAAS platforms in a Java Spring Boot backend and React
            Typescript frontend. I have a bachelor's in Computer Science from Portland State University where
            I excelled as a capstone team lead, teaching assistant, and software engineering intern. With 8
            years of experience programming in various languages I embrace a spirit of craftsmanship in
            writing clean, efficient, and scalable code. I thrive on technical challenges, communication, and
            agile teams.
          </Typography>
        </Stack>
        <img src={headshot} width={350} />
      </Stack>
    </Container>
  );
};
