import { Card, CardMedia, CardContent } from "@mui/material";
import { Typography, CardActions, Button } from "@mui/material";

function CardItem({ program, image, description }) {
  return (
    <Card sx={{ width: 350, height: 500, borderRadius: 10 }}>
      <CardMedia
        component="img"
        alt={program}
        height="300"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{ color: "var(--primary-color)" }}>
          {program}
        </Typography>
        <Typography variant="body2" sx={{ color: "var(--primary-color)" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Join</Button>
        <Button size="large">Share</Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;