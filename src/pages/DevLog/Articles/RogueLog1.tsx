import { Typography } from "@mui/material";

const data = {
  title: "Announcing Rogue Vivarium",
  date: "October 14, 2024",
  content: "This is the first sentence.",
};

export const RogueLog1 = () => {
  return (
    <div>
      <Typography variant="h3">{data.title}</Typography>
      <Typography variant="caption">{data.date}</Typography>
      <Typography variant="body1">{data.content}</Typography>
    </div>
  );
};
