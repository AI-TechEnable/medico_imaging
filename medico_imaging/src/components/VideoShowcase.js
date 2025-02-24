import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const VideoShowcase = ({ videoUrl, title, description }) => {
  return (
    <Container sx={{marginBottom:'40px',backgroundColor:'violet'}}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Information */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
            Sample Video
            </Typography>
            <Typography variant="body1" paragraph>
            This is a sample video showcasing some content. Enjoy watching!
            </Typography>
          </Box>
        </Grid>

        {/* Right Side: Video */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%', // 16:9 aspect ratio
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
