import { Card, CardMedia, CardContent } from "@mui/material";
import { Typography, CardActions, Button } from "@mui/material";

function ProgramCards({ program, image, description }) {
  return (
    <Card sx={{ width: 350, height: 600, borderRadius: 10 }}>
      <CardMedia
        component="img"
        alt={program}
        height="300"
        image={image}
      ></CardMedia>

      <CardContent>
        <Typography gutterBottom variant="h5" sx={{ color: "var(--primary-color)" }}>{program}</Typography>
        <Typography variant="body1" sx={{ color: "var(--primary-color)" }}>{description}</Typography>
      </CardContent>
      
      <CardActions>
        <Button size="large">Join</Button>
        <Button size="large">Share</Button>
      </CardActions>
    </Card>
  );
}

export default ProgramCards;