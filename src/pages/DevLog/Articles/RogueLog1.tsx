import { Stack, Typography } from "@mui/material";

const data = {
  title: "Announcing Rogue Vivarium",
  date: "October 14, 2024",
  content:
    "This is the first sentence. This is so much to read why do I even bother writing all \
    of this stuff like this. Maybe one day we can have nice things, but for now we will \
    just have to make due.",
};

export const RogueLog1 = () => {
  return (
    <Stack>
      <Typography variant="h3">{data.title}</Typography>
      <Typography variant="caption">{data.date}</Typography>
      <Typography variant="body1" sx={{ maxWidth: "70ch" }}>
        {data.content}
      </Typography>
    </Stack>
  );
};
