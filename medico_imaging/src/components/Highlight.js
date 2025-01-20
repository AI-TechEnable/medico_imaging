// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid2';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
// import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
// import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
// import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
// import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
// import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

// const categoriesData = [
//   // Example JSON data for categories
//   {
//     name: 'Smartphones',
//     icon: <AutoFixHighRoundedIcon />,
//     description: 'High-tech phones with all the latest features.',
//   },
//   {
//     name: 'Laptops',
//     icon: <ConstructionRoundedIcon />,
//     description: 'Durable and efficient laptops for work and play.',
//   },
//   {
//     name: 'Accessories',
//     icon: <ThumbUpAltRoundedIcon />,
//     description: 'Stylish accessories to enhance your tech experience.',
//   },
//   {
//     name: 'Home Appliances',
//     icon: <SettingsSuggestRoundedIcon />,
//     description: 'Innovative home appliances designed for convenience.',
//   },
//   {
//     name: 'Gaming',
//     icon: <QueryStatsRoundedIcon />,
//     description: 'Cutting-edge gaming products for an immersive experience.',
//   },
//   {
//     name: 'Wearables',
//     icon: <SupportAgentRoundedIcon />,
//     description: 'Track your health with our wearable devices.',
//   },
//   {
//     name: 'Wearables',
//     icon: <SupportAgentRoundedIcon />,
//     description: 'Track your health with our wearable devices.',
//   },
//   {
//     name: 'Wearables',
//     icon: <SupportAgentRoundedIcon />,
//     description: 'Track your health with our wearable devices.',
//   },
//   // Add more categories as necessary
// ];

// export default function Highlights() {
//   const [categories, setCategories] = React.useState([]);
//   const [showAll, setShowAll] = React.useState(false);

//   // Fetch categories data (simulated here as static data)
//   React.useEffect(() => {
//     // Assuming categoriesData is fetched from an external source
//     setCategories(categoriesData);
//   }, []);

//   // Handle showing more categories
//   const categoriesToShow = showAll ? categories : categories.slice(0, 5);

//   return (
//     <Box
//       id="highlights"
//       sx={{
//         pt: { xs: 4, sm: 12 },
//         pb: { xs: 8, sm: 16 },
//         color: 'white',
//         bgcolor: 'grey.900',
//       }}
//     >
//       <Container
//         sx={{
//           position: 'relative',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: { xs: 3, sm: 6 },
//         }}
//       >
//         <Box
//           sx={{
//             width: { sm: '100%', md: '60%' },
//             textAlign: { sm: 'left', md: 'center' },
//           }}
//         >
//           <Typography component="h2" variant="h4" gutterBottom>
//             Categories
//           </Typography>
//           <Typography variant="body1" sx={{ color: 'grey.400' }}>
//             Discover the wide range of products available across various categories.
//           </Typography>
//         </Box>
//         <Grid container spacing={2}>
//           {categoriesToShow.map((category, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Stack
//                 direction="column"
//                 component={Card}
//                 spacing={1}
//                 useFlexGap
//                 sx={{
//                   color: 'inherit',
//                   p: 3,
//                   height: '100%',
//                   borderColor: 'hsla(220, 25%, 25%, 0.3)',
//                   backgroundColor: 'grey.800',
//                 }}
//               >
//                 <Box sx={{ opacity: '50%' }}>{category.icon}</Box>
//                 <div>
//                   <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
//                     {category.name}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: 'grey.400' }}>
//                     {category.description}
//                   </Typography>
//                 </div>
//               </Stack>
//             </Grid>
//           ))}
//         </Grid>
//         {categories.length > 4 && (
//           <Box sx={{ mt: 3 }}>
//             <Typography
//               component="button"
//               variant="body2"
//               onClick={() => setShowAll((prev) => !prev)}
//               sx={{
//                 color: 'primary.main',
//                 cursor: 'pointer',
//                 textDecoration: 'underline',
//               }}
//             >
//               {showAll ? 'Show Less' : 'See More'}
//             </Typography>
//           </Box>
//         )}
//       </Container>
//     </Box>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { supabase } from '../supasbaseClient';
import { useNavigate } from 'react-router-dom';

export default function Highlights() {
  const [categories, setCategories] = React.useState([]);
  const [showAll, setShowAll] = React.useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Fetch categories from Supabase
  React.useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    try {
      const response = await supabase
        .from('Product Categories')
        .select('*')
        .limit(19);

      if (response.error) {
        throw response.error;
      }

      const data = response.data;
      if (data != null) {
        setCategories(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  // Handle showing more categories
  const categoriesToShow = showAll ? categories : categories.slice(0, 5);

  const handleCardClick = (categoryId) => {
    navigate(`/products/${categoryId}`); // Navigate to the products page with category ID
  };


  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 0 },
        pb: { xs: 8, sm: 8 },
        color: 'white',
        bgcolor: 'grey.100',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '90%' },
            textAlign: { sm: 'left', md: 'center'},
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
           Discover the wide range of products available across various categories.
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          {categoriesToShow.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                onClick={() => handleCardClick(category.id)} // Add onClick handler
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: '#004D99',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ opacity: '90%' }}>
                  {/* Render an image based on the category */}
                  <img
                    src={category.image_url}
                    alt={category.category_name}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '4px',
                    }}
                  />
                </Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {category.category_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'grey.400',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                    }}
                  >
                    {category.category_description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
        {categories.length > 5 && (
          <Box sx={{ mt: 3 }}>
            <Typography
              component="button"
              variant="body2"
              onClick={() => setShowAll((prev) => !prev)}
              sx={{
                color: 'primary.main',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              {showAll ? 'Show Less' : 'See More'}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
