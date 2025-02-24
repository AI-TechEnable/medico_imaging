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
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import AppAppBar from '../components/AppAppBar'; // Import the AppAppBar component
import '../styles/Testimonials.css'
import Footer from '../components/Footer'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <>
        <AppAppBar /> {/* Render the AppAppBar component */}
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
          Loading testimonials...
        </Typography>
      </>
    );
  }

  return (
    <div className='main'>
      <AppAppBar /> {/* Render the AppAppBar component */}
      <Container
        id="testimonials"
        sx={{
          pt: { xs: 16, sm: 16 },
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
            textAlign: 'center',
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'bold' }}
          >
            Testimonials
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4 }}>
            See what our customers love about our products. Discover how we excel in
            efficiency, durability, and satisfaction. Join us for quality, innovation,
            and reliable support.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
              <Card
                variant="outlined"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: 2,
                  background: 'linear-gradient(135deg, #f5f7fa, rgba(217, 222, 230, 0.9))',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
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
                    sx={{ color: 'text.secondary', fontSize: 'small' }}
                  >
                    {testimonial.review_date}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                    pb: 2,
                  }}
                >
                  <CardHeader
                    avatar={<Avatar alt={testimonial.reviewer_initial} src={testimonial.reviewer_initial} />}
                    title={testimonial.reviewer_name}
                    subheader={testimonial.reviewer_city}
                    sx={{ p: 0 }}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
}
