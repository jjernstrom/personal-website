import { ArticleCard } from "../../components/ArticleCard";
import RogueVivariumImage from "../../assets/AI-rogue-vivarium.png";
import { NavBar } from "../../components/NavBar";

const blogData = {
  title: "New Project: Rogue Vivarium!",
  navTitle: "RogueLog1",
  description:
    "I'm very excited to bring together interests that have been brewing for quite some time and apply the engineering skills and best practices that I've cultivated from diligent study and expert mentorship.",
  image: RogueVivariumImage,
  tag: "Software Engineering",
};

export const DevLog = () => {
  return (
    <>
      <NavBar />
      <h1>DevLog</h1>
      <ArticleCard {...blogData} />
    </>
  );
};
