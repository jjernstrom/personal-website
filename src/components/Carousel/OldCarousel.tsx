import { useEffect, useRef, useState } from 'react';
import { projects } from '../../data/projects';

// TODO: Leaving this here for study of how I misunderstood useEffect and setInterval

type project = {
  title: string;
  description: string;
  image: string;
};

const catalogue: Array<project> = projects;

export const Carousel = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  //const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  const [catalogueIndex, setCatalogueIndex] = useState<number>(0);
  const id = useRef<undefined | number>(undefined);

  const updateIndex = () => {
    if (catalogueIndex < catalogue.length - 1) {
      setCatalogueIndex(catalogueIndex + 1);
      console.log(catalogueIndex);
    } else {
      setCatalogueIndex(0);
      console.log(catalogueIndex);
    }
  };

  const startCarousel = () => {
    if (!id.current) {
      id.current = setInterval(updateIndex, 3000);
      console.log(id.current);
    }
    //setIntervalId(id.current);
  };

  const stopCarousel = () => {
    if (id.current) {
      clearInterval(id.current);
      id.current = undefined;
      console.log(id.current);
      //setIntervalId(undefined);
    }
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  const update = () => {
    if (isPlaying) {
      startCarousel();
      console.log(isPlaying);
    } else {
      stopCarousel();
      console.log(isPlaying);
    }
  };

  useEffect(update, [isPlaying]);

  update();

  return (
    <div>
      <button onClick={togglePlay}>Start/Stop</button>
      <div>
        <h1>{catalogue[catalogueIndex].title}</h1>
        <p>{catalogue[catalogueIndex].description}</p>
        <h2>
          <a href="http://www.jjernstrom.com">Play</a>
        </h2>
        <h2>
          <a href="https://github.com/jjernstrom/rogue-vivarium">View Project on GitHub</a>
        </h2>
      </div>
      <img src={catalogue[catalogueIndex].image} width={500} height={500} />
    </div>
  );
};
