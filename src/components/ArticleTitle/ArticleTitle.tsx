import { Stack, Typography } from "@mui/material";
import { ShareToolbar } from "../../pages/DevLog/Articles/RogueLog1";

interface Props {
  title: string;
  subTitle: string;
  tag: string;
  date: string;
  author: string;
}

export const ArticleTitle = ({ title, subTitle, tag, date, author }: Props) => {
  return (
    <Stack gap={2}>
      <Typography color="error" fontFamily="Courier New">
        {tag}
      </Typography>
      <Typography marginTop={2} variant="h3">
        {title}
      </Typography>
      <Typography variant="subtitle1">{subTitle}</Typography>
      <hr style={{ width: "100%", marginBottom: 0 }} />
      <Stack direction="row" display="flex">
        <Typography fontFamily="Courier New" variant="caption">
          {author}
          <br />
          {date}
        </Typography>
        <div
          style={{
            marginLeft: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <ShareToolbar />
        </div>
      </Stack>
      <hr style={{ width: "100%", marginTop: 0 }} />
    </Stack>
  );
};
