import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
// import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
// import SitemarkIcon from './SitemarkIcon';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="/" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
        Medico Imaging Services
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 2 },
        textAlign: { sm: 'center', md: 'left' },
        // borderTop: '1px solid',
        //   borderColor: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '80%' ,fontSize:'larger'},fontWeight:'bold' }}>
            Medico Imaging Services
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              CEO. Nitin Patil
            </Typography>
            
            <Typography variant="body2" sx={{mb: 1 }}>
            <a href="https://maps.app.goo.gl/veKRQds3PNbaHXE29">2- 204, Krishna Residency, Bankar Mala, Kathe Galli Dwarka, Nashik - 422011, Maharashtra, India</a>
            </Typography>
            <Typography variant="body2" sx={{mb: 1 }}>Call 08048601157 for Quick Support</Typography>
            {/* <InputLabel htmlFor="email-newsletter" sx={{color: 'white',textDecoration: 'none', }}>Email</InputLabel>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="email-newsletter"
                hiddenLabel
                size="small"
                // variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                slotProps={{
                  htmlInput: {
                    autoComplete: 'off',
                    'aria-label': 'Enter your email address',
                  },
                }}
                sx={{ width: '250px' ,color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }}}
              />
              <Button
                variant="contained"
                size="small"
                sx={{ flexShrink: 0 ,backgroundColor:'#003366'}}
              >
                Subscribe
              </Button>
            </Stack> */}
            <div className='Footer_mart' style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
              <span>
              <img src='https://td.imimg.com/css/tsLg1.png' alt='mart'></img>
              </span>
              <span>
              <Typography>GST :  27AMPPP0767N1Z7</Typography>
              <Typography ><Link sx={{color:'white'}} href="https://trustseal.indiamart.com/members/medicoimaging">TrustSeal Verified</Link></Typography>
              </span> 
            </div>
            
          </Box>
        </Box>
        <Box 
        sx={{
          marginTop:{xs:'40px',sm:'0px'},
          display: { xs: 'flex', sm: 'flex' },
          flexWrap:'wrap',
          gap: 5,
          color: 'white', // Ensures the text color is white
        }}

        >

        <Box
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            flexDirection: 'column',
            flexWrap:'wrap',
            gap: 1,
            color: 'white', // Ensures the text color is white
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'medium'}}>
            Products & Services
          </Typography>
          <Link color="text.secondary" variant="body2" href="/products/37/Sonography-Machine" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            Sonography Machines
          </Link>
          <Link color="text.secondary" variant="body2" href="/products/38/CR-Machines" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            CR Machines
          </Link>
          <Link color="text.secondary" variant="body2" href="/products/39/Hospital-Equipment" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            Hospital Equipment
          </Link>
          <Link color="text.secondary" variant="body2" href="/products/40/X-Ray-Machine" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            X-Ray Machines
          </Link>
          <Link color="text.secondary" variant="body2" href="/43/Refurbished-Ct-Scanner" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            Refurbished CT Scanners
          </Link>
          <Link color="text.secondary" variant="body2" href="/products/51/Cr-Systems" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            CR Systems
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            Company
          </Typography>
          <Link color="text.secondary" variant="body2" href="/About" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            About us
          </Link>
          <Link color="text.secondary" variant="body2" href="/testimonials" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
          Testimonials
          </Link>
          <Link color="text.secondary" variant="body2" href="#" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            Sitemap
          </Link>
          <Link color="text.secondary" variant="body2" href="/ProductVideos" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
          Product Videos
          </Link>
          <Link color="text.secondary" variant="body2" href="#faqs" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'grid', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            Legal
          </Typography>
          <Link color="text.secondary" variant="body2" href="https://www.indiamart.com/terms-of-use.html" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            Terms
          </Link>
          <Link color="text.secondary" variant="body2" href="https://www.indiamart.com/terms-of-use.html" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            Privacy
          </Link>
          <Link color="text.secondary" variant="body2" href="#" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            Contact
          </Link>
        </Box>

        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'white',
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="#" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            Privacy Policy
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" variant="body2" href="https://www.indiamart.com/terms-of-use.html" sx={{color: 'white',textDecoration: 'none','&:hover': { color: 'gold' }, }}>
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'white' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://x.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}