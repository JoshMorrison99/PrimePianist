import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

const Learn_Card = () => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "0 2px 8px 0 rgb(0 0 0 / 20%)" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="/placeholder.png"
          alt="learning path"
        />
        <CardContent>
          <Typography gutterBottom fontSize={18} component="div">
            Learning path description
          </Typography>
          <Typography fontSize={16} color="text.secondary">
            <ul>
              <li>Description 1</li>
              <li>Description 2</li>
              <li>Description 3</li>
              <li>Description 4</li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Learn_Card;
