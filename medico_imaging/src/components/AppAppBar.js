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
  const [formData, setFormData] = React.useState({ name: '', phone: '', message: '' }); // Form data

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

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
    setFormData({ name: '', phone: '', message: '' }); // Reset form data
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
          // productName: selectedProduct.product_name,
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
              {/* <MonitorHeartTwoToneIcon/> */}
              <img src={logo} alt="Medico Logo" style={{ height: 20 }} />
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
     
          </Box>
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

                <MenuItem >Explore Products</MenuItem>
                <MenuItem>About Us</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
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
          {/* <Typography variant="h6">Enquire about {selectedProduct?.product_name}</Typography> */}
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Name"
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
            <Button variant="contained" type="submit" fullWidth sx={{backgroundColor:'#003366'}}>Submit</Button>
          </form>
        </Box>
      </Modal>
    </AppBar>
  );
}