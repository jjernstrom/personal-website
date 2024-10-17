import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  subTitle: string;
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
    <Link to={navTitle} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345, height: 400 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="" />
        <CardContent>
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
      </Card>
    </Link>
  );
};
