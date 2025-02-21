import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Modal, TextField, Box } from '@mui/material';
import emailjs from 'emailjs-com';
import '../styles/Product_videos.css';
import AppAppBar from '../components/AppAppBar';
import Footer from '../components/Footer';

const Product_videos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const videos = [
    {
      title: 'Ge Logiq V5 Ultrasound Machine',
      videoUrl: 'https://www.youtube.com/embed/pv8c2HC-rZc?si=W91t5DHG6sIR8cuL',
      description: 'products/37/Sonography-Machine',
    },
    {
      title: 'Refurbished Carestream CR System',
      videoUrl: 'https://www.youtube.com/embed/V8TLuLEe_9U?si=7szUAa6_6MhIZMOh',
      description: 'products/38/CR-Machines',
    },
    {
      title: 'Phillips Intuis Cath Lab',
      videoUrl: 'https://www.youtube.com/embed/HxLF0Yo0ViY?si=q5y1CLoMpRnXdm1P',
      description: 'products/39/Hospital-Equipment',
    },
    {
      title: 'GE Make OEC 9900 Elite Cath Lab',
      videoUrl: 'https://www.youtube.com/embed/eyPe9F-ROrM?si=ZW0lYFmHoITElmuz',
      description: 'products/39/Hospital-Equipment',
    },
    {
      title: 'GE Ct Scan Machine',
      videoUrl: 'https://www.youtube.com/embed/9GB9d-Hdbvc?si=nfDWVfXBYlFGaKm-',
      description: 'products/53/Ct-Scan-Machine',
    },
    {
      title: 'Philips make allura FD10 Cath Lab',
      videoUrl: 'https://www.youtube.com/embed/6w5u8hZKAMo?si=ZMVQC-26tBKLOrwv',
      description: 'products/52/Old-Cathlab',
    },
    {
      title: 'Portable Color Doppler Ultrasound Scanner',
      videoUrl: 'https://www.youtube.com/embed/LVdtZl19dnE?si=naxS6XfE7HCz1TTn',
      description: 'products/50/Ultrasound-colour-Doppler-machine',
    },
    {
      title: 'Carestream VitaFlex Digital CR System',
      videoUrl: 'https://www.youtube.com/embed/9XuvpD1Sjw0?si=6bN8Zs7XUq0_mW9H',
      description: 'products/38/CR-Machines',
    }
  ];

  const handleModalOpen = (video) => {
    setSelectedVideo(video);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_wo4iwl7', // Replace with your EmailJS service ID
        'template_v6faxrr', // Replace with your EmailJS template ID
        {
          productName: selectedVideo.title,
          userName: formData.name,
          userPhone: formData.phone,
          userMessage: formData.message,
        },
        '0nAiH-WmAmtum7CzU' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Success:', response);
          alert('Enquiry submitted successfully!');
          handleModalClose();
        },
        (error) => {
          console.log('Error:', error);
          alert('Failed to send enquiry. Please try again.');
        }
      );
  };

  return (
    <div className='main'>
    <Container className="quality-page" sx={{ py: 14, mb: 2 }}>
      <AppAppBar />
      <Typography variant="h4" align="center" gutterBottom color="text.secondary">
        Our Product Videos
      </Typography>
      <Grid container spacing={4}>
        {videos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="iframe"
                height="250"
                src={video.videoUrl}
                title={video.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <a href={video.description} style={{ color: 'blue' }}>View details..</a>
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                fullWidth
                sx={{ borderRadius: 0, backgroundColor: '#003366' }}
                onClick={() => handleModalOpen(video)}
              >
                Get Quotation
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      

      {/* Modal for Enquiry Form */}
      <Modal open={openModal} onClose={handleModalClose}>
        <Box sx={{ width: 400, p: 3, m: 'auto', mt: 10, bgcolor: 'white', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h6">Enquire about {selectedVideo?.title}</Typography>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Email"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              fullWidth
              multiline
              rows={4}
              required
              sx={{ mb: 2 }}
            />
            <Button variant="contained" type="submit" fullWidth>Submit</Button>
          </form>
        </Box>
      </Modal>
    </Container>
    <Box sx={{ mt: 2 }}>
      <Footer />
    </Box>
    </div>
  );
};

export default Product_videos;
