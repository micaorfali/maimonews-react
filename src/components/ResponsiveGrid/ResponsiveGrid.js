import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RecipeReviewCard from '../RecipeReviewCard/RecipeReviewCard';


export default function ResponsiveGrid({noticias}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '1.5em' }}>
                {noticias.map((noticia, index) => (
                    <Grid item xs={12} sm={4} md={3} key={index}>
                        <RecipeReviewCard noticia={noticia} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
