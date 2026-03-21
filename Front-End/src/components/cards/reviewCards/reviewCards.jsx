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
          <Typography className="review-quote">"Rope flow has improved my coordination"</Typography>
          <Typography variant="body2" className="review-author">Pia V.</Typography>
        </CardContent>
      </Card>

      <Card className="review-one" display="flex" flexDirection="row" gap={0}variant="outlined">
        <CardContent>
          <Typography className="review-quote">"Rope flow has improved my coordination"</Typography>
          <Typography variant="body2" className="review-author">Pia V.</Typography>
        </CardContent>
      </Card>

      <Card className="review-one" display="flex" flexDirection="row" gap={0}variant="outlined">
        <CardContent>
          <Typography className="review-quote">"Rope flow has improved my coordination"</Typography>
          <Typography variant="body2" className="review-author">Pia V.</Typography>
        </CardContent>
      </Card>

    </Box>
  );
}

export default ReviewCard;
