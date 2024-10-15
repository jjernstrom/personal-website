import { NavBar } from "../../components/NavBar";
import { Carousel } from "../../components/Carousel";

export const Portfolio = () => {
  return (
    <>
      <title>jjernstrom: Portfolio</title>
      <header
        style={{
          marginTop: "2%",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <NavBar />
      </header>
      <main
        style={{
          marginTop: "5%",
          marginRight: "10%",
          marginLeft: "10%",
        }}
      >
        <Carousel />
      </main>
    </>
  );
};
