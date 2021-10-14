import * as React from 'react';
import './RecipeReviewCard.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LaunchIcon from '@mui/icons-material/Launch';
import dayjs from 'dayjs'

export default function RecipeReviewCard({noticia}) {
 const {title, img_url, category, date, source_name, url} = noticia;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
        title={source_name} className="diario"
        subheader={dayjs.unix(date).format('DD[/]MM[/]YYYY')}
      />
      <CardMedia
        component="img"
        height="194"
        image={img_url}
        alt="alt foto"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" >
        {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="launch">
          <a href={url} target="_blank" rel="noreferrer"><LaunchIcon /> </a>
        </IconButton>
      </CardActions>
      
    </Card>
  );
}
