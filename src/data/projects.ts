import rogueVivPic from "../assets/AI-rogue-vivarium.png";
import brownHopePic from "../assets/BrownHope.png";
import farOutPic from "../assets/FarOut.png";

export const projects = [
  {
    title: "Rogue Vivarium",
    description:
      "A simple rogue-lite in the context of a virtual ecosystem. Development is focused on exploring procedural generation techniques, agent-based modeling, and user interactivity. ",
    image: rogueVivPic,
  },
  {
    title: "Brown Hope Aid App",
    description:
      "An applicant creates an account on the webapp that verifies their connection with a record and establishes authentication credentials for future access as users. Users of the webapp will be able to view and edit select portions of their Airtable records and check the status of their application. Non-user-applicants will be able to check the progress of their application.",
    image: brownHopePic,
  },
  {
    title: "FarOut",
    description:
      "FarOut is a library that extends SFML to make creation of simple 2D games and apps easier. It includes a data type to represent different levels or rooms, called Scenes, and methods for management and navigation between the Scenes. Further, it includes a framework for a data type for objects within Scenes, with collision detection being a planned feature. FarOut also manages the game loop and the window for you, and includes a globally accesible data management system, which in the future will be saved and loaded easily between sessions.",
    image: farOutPic,
  },
];
