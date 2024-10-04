import { ReactElement, useState } from "react";
import { projects } from "../../data/projects";
import { useCarouselTimer } from "../../hooks/useCarouselTimer";

type project = {
  title: string;
  description: string;
  image: string;
  projectLink?: string;
  demoLink?: string;
};

const catalogue: Array<project> = projects;
const intervalDurationInMillis = 5000;

const IndexControls2 = (
  setIndex: React.Dispatch<React.SetStateAction<number>>
): Array<ReactElement> => {
  if (catalogue)
    return catalogue.map((value, index) => {
      return (
        <button key={value.title} onClick={() => setIndex(index)}>
          {index}
        </button>
      );
    });
  else return [];
};

export const Carousel = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [catalogueIndex, setCatalogueIndex] = useState<number>(0);

  const advanceIndex = () => {
    if (catalogueIndex < catalogue.length - 1)
      setCatalogueIndex(catalogueIndex + 1);
    else setCatalogueIndex(0);
  };
  const regressIndex = () => {
    if (catalogueIndex > 0) setCatalogueIndex(catalogueIndex - 1);
    else setCatalogueIndex(catalogue.length - 1);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  useCarouselTimer(isPlaying, advanceIndex, intervalDurationInMillis);

  return (
    <div style={{ margin: "auto" }}>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <button onClick={togglePlay}>Start/Stop</button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button onClick={regressIndex}>prev</button>
        <div style={{ margin: "10px" }}>
          <h1>{catalogue[catalogueIndex].title}</h1>
          <p>{catalogue[catalogueIndex].description}</p>
          <h2>
            <a href="http://www.jjernstrom.com">Play</a>
          </h2>
          <h2>
            <a href="https://github.com/jjernstrom/rogue-vivarium">
              View Project on GitHub
            </a>
          </h2>
        </div>
        <img
          src={catalogue[catalogueIndex].image}
          width={500}
          height={500}
          style={{ margin: "10px" }}
        />
        <button onClick={advanceIndex}>next</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {IndexControls2(setCatalogueIndex)}
      </div>
    </div>
  );
};
