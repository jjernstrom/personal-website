import { NavBar } from '../../components/NavBar';
import { Profile } from '../../components/Profile';

export const Home = () => {
  return (
    <>
      <head>
        <title>JJ: Software Engineer</title>
        <meta data-rh="true" property="og:title" content="Jeffrey Jernstrom - Software Engineer" />
        <meta data-rh="true" property="og:type" content="website" />
        <meta data-rh="true" property="og:image" content="http://www.jjernstrom.com/img.png" />
        <meta data-rh="true" property="og:url" content="http://www.jjernstrom.com/" />
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
