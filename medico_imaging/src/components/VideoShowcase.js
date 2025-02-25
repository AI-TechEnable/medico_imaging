import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import {useNavigate } from 'react-router-dom';

const VideoShowcase = ({ videoUrl, title, description }) => {
    const handleVideoClick=()=>{
        navigate(`/ProductVideos`);

    };
    const navigate = useNavigate();
  return (
    <Container sx={{marginBottom:'40px',backgroundColor:'#003366',borderRadius:'5px'}}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Information */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
            Our Medical Equipments
            </Typography>
            <Typography variant="body1" paragraph>
            Explore a wide range of medical and hospital equipment with advanced technology and reliable quality.
            </Typography>
            <Button sx={{backgroundColor:'#1976d2',color:'white'}} onClick={handleVideoClick}>View All Product Videos...</Button>
          </Box>
        </Grid>

        {/* Right Side: Video */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%', // 16:9 aspect ratio
              marginBottom:'20px',
            }}
          >
            <iframe
              src='https://www.youtube.com/embed/sPrUzAdpbvg?si=lddOfLm--OQudjYy'
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allowFullScreen
              title="Video"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoShowcase;

// Usage example:
// <VideoShowcase
//   videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
//   title="Sample Video"
//   description="This is a sample video showcasing some content. Enjoy watching!"
// />
