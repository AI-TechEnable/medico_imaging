import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { supabase } from '../supasbaseClient';
import { useNavigate } from 'react-router-dom';

export default function Highlights() {
  const [categories, setCategories] = React.useState([]);
  const [showAll, setShowAll] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    setLoading(true);
    setError(null);
    try {
      const response = await supabase
        .from('Product Categories')
        .select('*')
        .limit(19);

      if (response.error) {
        throw response.error;
      }

      setCategories(response.data || []);
    } catch (error) {
      setError('Failed to load categories. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  const categoriesToShow = showAll ? categories : categories.slice(0, 5);

  const handleCardClick = (categoryId, categoryName) => {
    const formattedCategoryName = categoryName.replace(/\s+/g, '-');
    navigate(`/products/${categoryId}/${formattedCategoryName}`);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', padding: 3 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

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
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Discover the wide range of products available across various categories.
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          {categoriesToShow.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.id}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                onClick={() => handleCardClick(category.id, category.category_name)}
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
                  <img
                    src={category.image_url || '/fallback-image.png'}
                    alt={category.category_name || 'Category'}
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
            <button
              onClick={() => setShowAll((prev) => !prev)}
              style={{
                background: 'none',
                border: 'none',
                color: '#1976d2',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: '1rem',
              }}
            >
              {showAll ? 'Show Less' : 'See More'}
            </button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
