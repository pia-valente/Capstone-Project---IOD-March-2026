import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./reviewCards.css"


function ReviewCard() {
  return (
    <Box className="review-box"  display="flex" flexDirection="row" justifyContent="center" gap={3}>

      <Card className="review-one" display="flex" flexDirection="row" gap={0}variant="outlined">
        <CardContent>
          <Typography className="review-quote">“Rope flow completely changed how I move. My coordination and rhythm have improved so much, and I feel way more connected through my whole body."</Typography>
          <br></br>
          <Typography variant="body2" className="review-author">- Pia V.</Typography>
        </CardContent>
      </Card>

      <Card className="review-one" display="flex" flexDirection="row" gap={0}variant="outlined">
        <CardContent>
          <Typography className="review-quote">“It’s not just strength—my movement quality has improved. I’m more stable, more balanced, and way more aware of how my body moves.”</Typography>
          <br></br>
          <Typography variant="body2" className="review-author">Liza J.</Typography>
        </CardContent>
      </Card>

      <Card className="review-one" display="flex" flexDirection="row" gap={0}variant="outlined">
        <CardContent>
          <Typography className="review-quote">“The rotational movements with the mace helped me build strength while improving how I move in all directions.”</Typography>
          <br></br>
          <Typography variant="body2" className="review-author">Peter P.</Typography>
        </CardContent>
      </Card>

    </Box>
  );
}

export default ReviewCard;
