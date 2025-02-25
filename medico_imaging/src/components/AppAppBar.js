import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import logo from '../assets/medico_logo.png'
import {Modal,TextField} from '@mui/material';
import emailjs from 'emailjs-com';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false); // Modal state
  const [formData, setFormData] = React.useState({ name: '', phone: '', message: '',product: '', }); // Form data
  const [selectedProduct, setSelectedProduct] = React.useState('');
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const productCategories = [
    'Sonography Machine',
    'CR Machines',
    'Hospital Equipment',
    'X-Ray Machine',
    'C Arm Machine',
    'Refurbished Medical Machines',
    'Refurbished Ct Scanner',
    'Point Of Care Ultrasound',
    'CT Scanner',
    'D R SYSTEM',
    'Diagnostic Services',
    'Portable X Ray Machine',
    'Old CT Scan',
    'Ultrasound Colour Doppler Machine',
    'Cr Systems',
    'Old Cathlab',
    'Ct Scan Machine'
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const phoneNumber = '08048601157';

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = (product) => {
    // setSelectedProduct(product); // Set the selected product
    setOpenModal(true); // Open the modal
  };

  const handleModalClose = () => {
    setOpenModal(false); // Close the modal
    setFormData({ name: '', phone: '', message: '',product:'', }); // Reset form data
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send email using emailjs
    emailjs
      .send(
        'service_wo4iwl7', // Replace with your EmailJS service ID
        'template_v6faxrr', // Replace with your EmailJS template ID
        {
          productName: selectedProduct,
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

  const open1 = Boolean(anchorEl);

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Box sx={{ display: { xs: 'flex', md: 'flex' } ,color:'#004D99' }}>
              <img src={logo} alt="Medico Logo" style={{ height: 25 }} />
              <Button variant="text" color="red" size="small" sx={{ color: 'black' }} href='/'>
                Medico imaging services
              </Button>
            </Box>
          </Box>  
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {/* <p><Link to="/products">Explore Products</Link></p> */}
            <Button variant="text" color="info" size="small"sx={{ color: 'black' }}>
            <Link to="/products/37/Sonography-Machine">Explore Products</Link>
            </Button>
            <Button variant="text" color="info" size="small" sx={{ color: 'black' }}>
              <Link to="/About">About Us</Link>
            </Button>
          </Box>
          <Button color="primary" variant="text" size="small">
            <div>
                <Typography
                  aria-owns={open1 ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                  onClick={() => handleModalOpen()}
                >
                  <LocalPostOfficeIcon/>  
                </Typography>
                <Popover
                  id="mouse-over-popover"
                  sx={{ pointerEvents: 'none' }}
                  open={open1}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Typography sx={{ p: 1 , bgcolor:'transperent',fontSize:'15px'}}>Get Instant Quotes</Typography>
                </Popover>
              </div>
            </Button>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            {/* <ColorModeIconDropdown size="medium" /> */}
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem component={Link} to="/products/37/Sonography-Machine">Explore Products</MenuItem>
                <MenuItem component={Link} to="/About">About Us</MenuItem>
                <MenuItem component={Link} to="/ProductVideos">Product Videos</MenuItem>
                <MenuItem component={Link} to="/testimonials">Testimonials</MenuItem>
                <MenuItem component={Link} to="/Contact">Contact</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth href='/Contact'>
                    Enquiry Form
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth component="a"href={`tel:${phoneNumber}`}>
                  Call {phoneNumber}
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
      {/* Modal for Enquiry Form */}
      <Modal open={openModal} onClose={handleModalClose}>
        <Box sx={{ width: 400, p: 3, m: 'auto', mt: 10, bgcolor: 'white', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h6">Get in touch with us for all your Medical and Hospital Equipment needs.</Typography>

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
            select
            label="Product"
            name="product"
            value={formData.product}
            onChange={(e) => {
              handleFormChange(e);
              setSelectedProduct(e.target.value);
            }}
            fullWidth
            required
            sx={{ mb: 2 }}
          >
            {productCategories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
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
            <Button variant="contained" type="submit" fullWidth sx={{backgroundColor:'#003366'}}>Submit</Button>
          </form>
        </Box>
      </Modal>
    </AppBar>
  );
}