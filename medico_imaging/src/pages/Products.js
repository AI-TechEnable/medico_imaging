import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supasbaseClient';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Products() {
  const { categoryId } = useParams(); // Get categoryId from URL
  console.log('Category ID from URL:', categoryId);  // Log the categoryId to check its value
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      fetchProducts(categoryId); // Only fetch if categoryId exists
    }
  }, [categoryId]);

  async function fetchProducts(categoryId) {
    const numericCategoryId = parseInt(categoryId, 10); // Convert to a number
    console.log('Converted Category ID:', numericCategoryId); // Log the numeric value

    if (isNaN(numericCategoryId)) {
      console.error('Invalid category ID:', categoryId);
      return;
    }

    try {
      const response = await supabase
        .from('Products')
        .select('*')
        .eq('category_id', numericCategoryId); // Use numericCategoryId

      // console.log('Supabase Response:', response); // Log the full response object

      if (response.error) {
        throw response.error;
      }

      if (response.data && response.data.length > 0) {
        setProducts(response.data);
      } else {
        console.log('No products found for this category.');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      alert(error.message);
    }
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Box
                sx={{
                  border: '1px solid grey',
                  borderRadius: '4px',
                  padding: 2,
                  textAlign: 'center',
                }}
              >
                <img
                  src={product.image_url}
                  alt={product.product_name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '4px',
                  }}
                />
                <Typography variant="h6">{product.product_name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No products available for this category.</Typography>
        )}
      </Grid>
    </Box>
  );
}
