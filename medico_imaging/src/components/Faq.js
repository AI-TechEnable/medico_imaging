import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(
      isExpanded ? [...expanded, panel] : expanded.filter((item) => item !== panel),
    );
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 2, sm: 2 },
        pb: { xs: 8, sm: 12 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 4 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'white',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Frequently asked questions
      </Typography>
      <Box sx={{ width: '100%'}}>
      <Accordion
          expanded={expanded.includes('panel1')}
          onChange={handleChange('panel1')}
          sx={{borderRadius:'10px',marginBottom:'2px'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              What does Medico Imaging Services specialize in?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Medico Imaging Services specializes in trading and supplying new and refurbished  <Link href="/products/37/Sonography-Machine">medical equipment</Link>, including ultrasound machines, X-ray machines, CT scanners, CR machines, mammography machines, and more. The company is also known for providing maintenance services for these products.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes('panel2')}
          onChange={handleChange('panel2')}
          sx={{borderRadius:'10px',marginBottom:'2px'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Where is Medico Imaging Services located?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Medico Imaging Services is located at 2-204, Krishna Residency, Bankar Mala, Kathe Galli, Dwarka, Nashik - 422011, Maharashtra, India.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel3')}
          onChange={handleChange('panel3')}
          sx={{borderRadius:'10px',marginBottom:'2px'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
            What types of refurbished medical equipment are available?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              The company offers a wide range of refurbished equipment such as:
            </Typography>
              <Typography component="ul" variant="body2" sx={{ pl: 2 }}>
              <Typography component="li" variant="body2">Ultrasound Machines</Typography>
              <Typography component="li" variant="body2">C-Arm Machines</Typography>
              <Typography component="li" variant="body2">Color Doppler Machines</Typography>
              <Typography component="li" variant="body2">CT Scanners</Typography>
              <Typography component="li" variant="body2">Mammography Machines</Typography>
              <Typography component="li" variant="body2">Endoscopy Machines</Typography>
              <Typography component="li" variant="body2">Portable X-Ray Machines</Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel4')}
          onChange={handleChange('panel4')}
          sx={{borderRadius:'10px',marginBottom:'2px'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Do you provide after-sales support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Yes, Medico Imaging Services provides comprehensive after-sales support, including installation training, operational training, onsite support, and user manuals for all their equipment.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel5')}
          onChange={handleChange('panel5')}
          sx={{borderRadius:'10px',marginBottom:'2px'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5d-content"
            id="panel5d-header"
          >
            <Typography component="h3" variant="subtitle2">
            How can I contact Medico Imaging Services for inquiries?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              <Typography component="li" variant="body2">Contact:  08048601157</Typography>
              <Typography component="li" variant="body2">Email: </Typography>
              <Typography component="li" variant="body2">Address: Visit their office at Krishna Residency, Dwarka, Nashik, Maharashtra.</Typography>
              
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel6')}
          onChange={handleChange('panel6')}
          sx={{borderRadius:'10px',marginBottom:'2px'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6d-content"
            id="panel6d-header"
          >
            <Typography component="h3" variant="subtitle2">
            What is the customer satisfaction rating of Medico Imaging Services?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              The company has a customer satisfaction rating of 3.8/5 based on 45 reviews. Quality and delivery have been rated highly, at 85% and 83%, respectively.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes('panel7')}
          onChange={handleChange('panel7')}
          sx={{borderRadius:'10px',marginBottom:'2px'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7d-content"
            id="panel6d-header"
          >
            <Typography component="h3" variant="subtitle2">
            What is the customer satisfaction rating of Medico Imaging Services?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              The company has a customer satisfaction rating of 3.8/5 based on 45 reviews. Quality and delivery have been rated highly, at 85% and 83%, respectively.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </Box>
    </Container>
  );
}