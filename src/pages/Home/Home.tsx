import { NavBar } from '../../components/NavBar';
import { Profile } from '../../components/Profile';

export const Home = () => {
  return (
    <>
      <head>
        <title>JJ: Software Engineer</title>
      </head>
      <body>
        <NavBar />
        <main>
          <Profile />
        </main>
      </body>
    </>
  );
};
