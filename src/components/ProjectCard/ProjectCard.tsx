import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import { ShareToolbar } from "../ShareToolbar/ShareToolbar";

export interface Props {
  title: string;
  description: string;
  image: string;
  tag: string;
  gitHubLink: string;
  websiteLink: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  tag,
  gitHubLink,
  websiteLink,
}: Props) => {
  return (
    <Card sx={{ maxWidth: 500, display: "flex" }}>
      <Stack>
        <CardMedia sx={{ height: 140 }} image={image} title={title} />
        <CardContent sx={{ marginBottom: "auto" }}>
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            color="error"
          >
            {tag}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={gitHubLink}>
            GitHub
          </Button>
          {websiteLink ? (
            <Button variant="contained" size="small" href={websiteLink}>
              Play
            </Button>
          ) : (
            ""
          )}
          <div style={{ marginLeft: "auto" }}>
            <ShareToolbar />
          </div>
        </CardActions>
      </Stack>
    </Card>
  );
};
