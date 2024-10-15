import { NavBar } from "../../components/NavBar";
import { Profile } from "../../components/Profile";

export const Home = () => {
  return (
    <>
      <title>Jeffrey Jernstrom: Software Engineer</title>
      <body>
        <header>
          <NavBar />
        </header>
        <main>
          <Profile />
        </main>
      </body>
    </>
  );
};
