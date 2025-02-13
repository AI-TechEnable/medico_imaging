import * as React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../supasbaseClient';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const maxVisible = 6; // Max number of testimonials to show initially

  useEffect(() => {
    // Fetch data from Supabase
    const fetchTestimonials = async () => {
      const { data, error } = await supabase.from('reviews').select('*');
      if (error) {
        console.error('Error fetching testimonials:', error);
      } else {
        setTestimonials(data); // Set fetched data
      }
      setLoading(false); // Set loading to false
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
        Loading testimonials...
      </Typography>
    );
  }

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 2 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '80%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Testimonials
        </Typography>
        <Typography variant="h5" sx={{ color: 'text.secondary' }}>
          See what our customers love about our products. Discover how we excel in
          efficiency, durability, and satisfaction. Join us for quality, innovation,
          and reliable support.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {testimonials.slice(0,maxVisible).map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={testimonial.id} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                borderRadius:5,
                background: 'linear-gradient(135deg, #f5f7fa,rgba(217, 222, 230, 0.9))',
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}
                >
                  {testimonial.product_name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  {Array.from({ length: testimonial.review_stars }).map((_, i) => (
                    <StarIcon key={i} sx={{ color: 'gold', fontSize: 20 }} />
                  ))}
                </Box>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary', fontSize:'extrasmall' }}
                >
                  {testimonial.review_date}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >    
                <CardHeader
                  avatar={<Avatar alt={testimonial.reviewer_initial} src={testimonial.reviewer_initial} />}
                  title={testimonial.reviewer_name}
                  subheader={testimonial.reviewer_city}
                  
                />
              </Box>
              {/* <StarIcon/> */}
            </Card>
          </Grid>
        ))}
      </Grid>
      {testimonials.length > maxVisible && (
        <Button
          variant="contained"
        //   color="primary"
          sx={{ mt: 4 ,backgroundColor:'#004D99'}}
          onClick={() => window.location.href = '/testimonials'}
        >
          View all
        </Button>
      )}
    </Container>
  );
}
