import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  navTitle: string;
  description: string;
  image: string;
  tag: string;
}

export const ArticleCard = ({
  title,
  navTitle,
  description,
  image,
  tag,
}: Props) => {
  return (
    <Link to={navTitle}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="" />
        <CardContent>
          <Typography gutterBottom variant="caption" component="div">
            {tag}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
