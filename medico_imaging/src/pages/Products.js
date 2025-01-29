import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supasbaseClient';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { LinearProgress } from '@mui/material';
import { FaFileCircleCheck } from 'react-icons/fa6';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import '../styles/Products.css';
import Link from '@mui/material/Link';
import logo from '../assets/medico_logo.png'
import {AppBar,Toolbar,} from '@mui/material';

export default function Products() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState({});

  useEffect(() => {
    fetchCategories();
    if (categoryId) {
      fetchProducts(categoryId);
    }
  }, [categoryId]);

  async function fetchCategories() {
    try {
      const response = await supabase.from('Product Categories').select('*');
      if (response.error) throw response.error;
      setCategories(response.data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  async function fetchProducts(categoryId) {
    setLoading(true);
    try {
      const numericCategoryId = parseInt(categoryId, 10);
      if (isNaN(numericCategoryId)) throw new Error('Invalid category ID');

      const productResponse = await supabase
        .from('Products')
        .select('*')
        .eq('category_id', numericCategoryId);

      if (productResponse.error) throw productResponse.error;

      const productsData = productResponse.data || [];
      const productIds = productsData.map((product) => product.id);

      const imageResponse = await supabase
        .from('Product Images')
        .select('*')
        .in('product_id', productIds);

      if (imageResponse.error) throw imageResponse.error;

      const imagesByProductId = imageResponse.data.reduce((acc, image) => {
        if (!acc[image.product_id]) {
          acc[image.product_id] = [];
        }
        acc[image.product_id].push(image.image_url);
        return acc;
      }, {});

      const productsWithImages = productsData.map((product) => ({
        ...product,
        images: imagesByProductId[product.id] || [],
      }));

      setProducts(productsWithImages);
      // Initialize selected images with first image of each product
      const initialSelected = productsWithImages.reduce((acc, product) => {
        acc[product.id] = product.image_url || '';
        return acc;
      }, {});
      setSelectedImages(initialSelected);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleCategoryClick = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    const categoryName = category
      ? category.category_name.replace(/\s+/g, '-')
      : 'undefined';
    navigate(`/products/${categoryId}/${categoryName}`);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleThumbnailClick = (productId, imageUrl) => {
    setSelectedImages(prev => ({
      ...prev,
      [productId]: imageUrl
    }));
  };

  const renderSidebar = (
    <Box
      sx={{
        width: { xs: '250px', sm: '250px' },
        p: 2,
        height: '100%',
        backgroundColor:'#1976d2',
        color:'white',
        overflowY: 'auto',
        '&::-webkit-scrollbar': { width: '8px' },
        '&::-webkit-scrollbar-track': { backgroundColor: '#f0f0f0', borderRadius: '2px' },
        '&::-webkit-scrollbar-thumb': { backgroundColor: '#888', borderRadius: '4px' },
        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#555' },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      <List>
        {categories.map((category) => (
          <ListItem key={category.id} disablePadding>
            <ListItemButton
              selected={String(category.id) === categoryId}
              onClick={() => {
                handleCategoryClick(category.id);
                if (isMobileMenuOpen) toggleMobileMenu();
              }}
            >
              <ListItemText primary={category.category_name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const currentCategory = categories.find((cat) => String(cat.id) === categoryId);
  const handleReviewsClick = () => {
    // Handle Reviews click
    console.log('Reviews clicked');
  };

  const handleAboutUsClick = () => {
    // Handle About Us click
    console.log('About Us clicked');
  };

  return (
    <div>
       {/* Navbar */}
       <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        height: '60px',
        WebkitBackdropFilter: 'blur(10px)',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={logo} alt="Medico Logo" style={{ height: 20 }} />
          <Typography variant="h6" color="black">
            Medico Imaging Service
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 2 }}>
          <Typography
            variant="h6"
            color="black"
            sx={{ cursor: 'pointer' }}
            onClick={handleReviewsClick}
          >
            Reviews
          </Typography>
          <Typography
            variant="h6"
            color="black"
            sx={{ cursor: 'pointer' }}
            onClick={handleAboutUsClick}
          >
            About Us
          </Typography>
        </Box>
        <IconButton
          sx={{ display: { xs: 'block', sm: 'none' }, position: 'absolute', top: 10, right: 16 }}
          onClick={toggleMobileMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>

      <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', paddingTop: '64px' }}>
        {/* Mobile Menu Toggle */}
        {/* <IconButton
          sx={{ display: { xs: 'block', sm: 'none' }, position: 'absolute', top: 120, left: 16 }}
          onClick={toggleMobileMenu}
        >
          <MenuIcon />
        </IconButton> */}

        {/* Sidebar/Drawer */}
        <Drawer
          open={isMobileMenuOpen}
          onClose={toggleMobileMenu}
          anchor="left"
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          {renderSidebar}
        </Drawer>

        {/* Desktop Sidebar */}
        <Box sx={{ display: { xs: 'none', sm: 'block' }, width: { sm: '250px' }, borderRight: '1px solid #e0e0e0' }}>
          {renderSidebar}
        </Box>

        {/* Main Content */}
        <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
          {/* Breadcrumbs */}
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
            <Link underline="hover" color="inherit" onClick={() => navigate('/')}>
              Home
            </Link>

            {currentCategory && (
              <Typography color="text.primary">{currentCategory.category_name}</Typography>
            )}
          </Breadcrumbs>

          {loading ? (
            <LinearProgress sx={{ width: '100%' }} />
          ) : products.length > 0 ? (
            products.map((product) => {
              const productImages = product.images[0] || [];
              const mainImage = selectedImages[product.id] || productImages[0] || 'https://via.placeholder.com/400';
              const validSpecifications = Object.entries(product).some(([key, value]) => {
                const specKeys = [
                  'model_name', 'brand', 'imaging_mode', 'battery_backup',
                  'touch_screen_monitor', 'monitor_resolution', 'monitor_size',
                  'weight', 'clinical_application', 'connectivity_ports',
                  'doppler_mode', 'throughput', 'dimensions', 'power_consumption',
                  'Printing Technology', 'AERB Approved', 'Operation Mode'
                ];
                return specKeys.includes(key) && value !== null && value !== '';
              });

              return (
                <Box
                  key={product.id}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'flex-start',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    mb: 3,
                    p: 3,
                    gap: 3,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                    bgcolor: 'white',
                  }}
                >
                  {/* Image Gallery Section */}
                  <Box sx={{ width: { xs: '100%', sm: '40%' }, flexShrink: 0 }}>
                    <Box
                      sx={{
                        width: '100%',
                        height: { xs: '250px', sm: '350px' },
                        borderRadius: '8px',
                        overflow: 'hidden',
                        bgcolor: '#f5f5f5',
                        position: 'relative'
                      }}
                    >
                      <img
                        src={mainImage}
                        alt={product.product_name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          transition: 'opacity 0.3s ease',
                          backgroundColor:'white'
                        }}
                      />
                    </Box>

                    {/* Thumbnails */}
                    {productImages.length > 1 && (
                      <Box
                        sx={{
                          display: 'flex',
                          // flexWrap:'wrap',
                          flexWrap: { xs: 'nowrap', sm: 'wrap' },
                          gap: 1,
                          mt: 2,
                          overflowX: 'auto',
                          pb: 1,
                          '&::-webkit-scrollbar': { height: '6px' },
                          '&::-webkit-scrollbar-thumb': { backgroundColor: '#888', borderRadius: '3px' },
                        }}
                      >
                        {productImages.map((img, index) => (
                          <Box
                            key={index}
                            onClick={() => handleThumbnailClick(product.id, img)}
                            sx={{
                              width: '80px',
                              height: '80px',
                              flexShrink: 0,
                              borderRadius: '4px',
                              overflow: 'hidden',
                              cursor: 'pointer',
                              border: mainImage === img ? '2px solid #1976d2' : '2px solid transparent',
                              transition: 'all 0.2s ease',
                              '&:hover': { borderColor: '#1976d2', opacity: 0.9 },
                            }}
                          >
                            <img
                              src={img}
                              alt={`Thumbnail ${index + 1}`}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>

                  {/* Product Details */}
                  <Box sx={{ flex: 1, width: { xs: '100%', sm: '60%' } }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {product.product_name}
                    </Typography>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        color: 'primary.main',
                        mb: 2,
                        '&:hover': { fontWeight: 'bold' },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      ₹ {product.price?.toLocaleString() || 'N/A'}
                    </Typography>

                    {product.brochure_url && (
                      <Typography variant="body2" color="primary" gutterBottom>
                        <a
                          href={product.brochure_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
                        >
                          <FaFileCircleCheck /> View Brochure
                        </a>
                      </Typography>
                    )}

                    <Typography variant="body1" color="text.secondary" paragraph sx={{ mt: 2 }}>
                      {product.description}
                    </Typography>

                    {validSpecifications && (
                      <div className="specifications-container">
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Specifications</Typography>
                        <div className="table-wrapper">
                          <table className="specifications-table">
                            <tbody>
                              {Object.entries(product).map(([key, value]) => {
                                const specKeys = [
                                  'model_name', 'brand', 'imaging_mode', 'battery_backup',
                                  'touch_screen_monitor', 'monitor_resolution', 'monitor_size',
                                  'weight', 'clinical_application', 'connectivity_ports',
                                  'doppler_mode', 'throughput', 'dimensions', 'power_consumption',
                                  'Printing Technology', 'AERB Approved', 'Operation Mode'
                                ];
                                
                                if (specKeys.includes(key) && value !== null && value !== '') {
                                  return (
                                    <tr key={key}>
                                      <td>{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                                      <td>{value}</td>
                                    </tr>
                                  );
                                }
                                return null;
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </Box>
                </Box>
              );
            })
          ) : (
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
              No products available in this category
            </Typography>
          )}
        </Box>
      </Box>
    </div>
  );
} 

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { supabase } from '../supasbaseClient';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Drawer from '@mui/material/Drawer';
// import { LinearProgress } from '@mui/material';
// import { FaFileCircleCheck } from 'react-icons/fa6';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import '../styles/Products.css'
// import Link from '@mui/material/Link';

// export default function Products() {
//   const { categoryId } = useParams();
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     fetchCategories();
//     if (categoryId) {
//       fetchProducts(categoryId);
//     }
//   }, [categoryId]);

//   async function fetchCategories() {
//     try {
//       const response = await supabase.from('Product Categories').select('*');
//       if (response.error) throw response.error;
//       setCategories(response.data || []);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   }

//   async function fetchProducts(categoryId) {
//     setLoading(true);
//     try {
//       const numericCategoryId = parseInt(categoryId, 10);
//       if (isNaN(numericCategoryId)) throw new Error('Invalid category ID');

//       const productResponse = await supabase
//         .from('Products')
//         .select('*')
//         .eq('category_id', numericCategoryId);

//       if (productResponse.error) throw productResponse.error;

//       const productsData = productResponse.data || [];

//       const productIds = productsData.map((product) => product.id);
//       const imageResponse = await supabase
//         .from('Product Images')
//         .select('*')
//         .in('product_id', productIds);

//       if (imageResponse.error) throw imageResponse.error;

//       const imagesByProductId = imageResponse.data.reduce((acc, image) => {
//         acc[image.product_id] = image.image_url;
//         return acc;
//       }, {});

//       const productsWithImages = productsData.map((product) => ({
//         ...product,
//         images: imagesByProductId[product.id] || [],
//       }));

//       setProducts(productsWithImages);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const handleCategoryClick = (categoryId) => {
//     const category = categories.find((cat) => cat.id === categoryId);
//     const categoryName = category
//       ? category.category_name.replace(/\s+/g, '-')
//       : 'undefined';
//     navigate(`/products/${categoryId}/${categoryName}`);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const renderSidebar = (
//     <Box
//       sx={{
//         width: { xs: '250px', sm: '250px' },
//         p: 2,
//         height: '100%', // Ensure it takes full height
//         overflowY: 'auto', // Enable vertical scrolling
//         '&::-webkit-scrollbar': {
//         width: '8px', // Adjust scrollbar width
//       },
//       '&::-webkit-scrollbar-track': {
//         backgroundColor: '#f0f0f0', // Background color of the track
//         borderRadius: '4px',
//       },
//       '&::-webkit-scrollbar-thumb': {
//         backgroundColor: '#888', // Color of the thumb
//         borderRadius: '4px',
//       },
//       '&::-webkit-scrollbar-thumb:hover': {
//         backgroundColor: '#555', // Color of the thumb on hover
//       },
//       }}
//     >
//       <Typography variant="h6" gutterBottom>
//         Categories
//       </Typography>
//       <List>
//         {categories.map((category) => (
//           <ListItem key={category.id} disablePadding>
//             <ListItemButton
//               selected={String(category.id) === categoryId}
//               onClick={() => {
//                 handleCategoryClick(category.id);
//                 if (isMobileMenuOpen) toggleMobileMenu();
//               }}
//             >
//               <ListItemText primary={category.category_name} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//     </Box>
//   );
//   const currentCategory = categories.find((cat) => String(cat.id) === categoryId);

//   return (
//     <div>
//       <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
//         {/* Mobile Menu Toggle Button */}
//         <IconButton
//           sx={{ display: { xs: 'block', sm: 'none' }, position: 'absolute', top: 16, left: 16 }}
//           onClick={toggleMobileMenu}
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* Sidebar for Desktop and Drawer for Mobile */}
//         <Drawer
//           open={isMobileMenuOpen}
//           onClose={toggleMobileMenu}
//           anchor="left"
//           sx={{ display: { xs: 'block', sm: 'none' } }}
//         >
//           {renderSidebar}
//         </Drawer>

//         <Box
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             width: { sm: '250px' },
//             borderRight: '1px solid grey',
//           }}
//         >
//           {renderSidebar}
//         </Box>

//         {/* Products Grid */}
//         <Box
//           sx={{
//             flex: 1,
//             overflowY: 'auto',
//             p: 4,
//           }}
//         >
//           {/* Breadcrumbs */}
//         <Breadcrumbs aria-label="breadcrumb" sx={{p:1}}>
//             <Link underline="hover" color="inherit" onClick={() => navigate('/')}>
//               Home
//             </Link>
//             <Link underline="hover" color="inherit" onClick={() => navigate('/products')}>
//               Products
//             </Link>
//             {currentCategory && (
//               <Typography color="text.primary">{currentCategory.category_name}</Typography>
//             )}
//           </Breadcrumbs>
//           <Typography variant="h4" gutterBottom>

//           </Typography>
//           {loading ? (
//             <Typography variant="body1"> <LinearProgress /> </Typography>
//           ) : products.length > 0 ? (
//             <Box>
//               {products.map((product) => {
//                 // Check if there are any valid specifications
//                 const validSpecifications = Object.entries(product).some(([key, value]) => {
//                   const specifications = [
//                     'model_name',
//                     'brand',
//                     'imaging_mode',
//                     'battery_backup',
//                     'touch_screen_monitor',
//                     'monitor_resolution',
//                     'monitor_size',
//                     'weight',
//                     'clinical_application',
//                     'connectivity_ports',
//                     'doppler_mode',
//                   ];
//                   return specifications.includes(key) && value !== null && value !== '';
//                 });

//                 return (
//                   <Box
//                     key={product.id}
//                     sx={{
//                       display: 'flex',
//                       flexDirection: { xs: 'column', sm: 'row' },
//                       alignItems: 'center',
//                       border: '1px solid grey',
//                       borderRadius: '8px',
//                       mb: 3,
//                       p: 2,
//                       gap: 2,
//                       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                       bgcolor: 'white',
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: { xs: '100%', sm: '150px' },
//                         height: { xs: 'auto', sm: '150px' },
//                         overflow: 'hidden',
//                         borderRadius: '8px',
//                         flexShrink: 0,
//                       }}
//                     >
//                       <img
//                         src={product.images[0] || 'https://via.placeholder.com/150'}
//                         alt={product.product_name}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'cover',
//                         }}
//                       />
//                     </Box>

//                     <Box sx={{ flex: 1 }}>
//                       <Typography variant="h6" gutterBottom>
//                         {product.product_name}
//                       </Typography>
//                       <Typography variant="h6" color="text.secondary" gutterBottom sx={{ fontWeight: 'normal',color: 'primary.main',transition: 'all 0.3s ease','&:hover': {fontWeight: 'bold',color: 'primary.main', },}}>
//                         ₹ {product.price}.00
//                       </Typography>
//                       {product.brochure_url && (
//                         <Typography variant="body2" color="primary" gutterBottom>
//                           <a href={product.brochure_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
//                             View Brochure <FaFileCircleCheck/>
//                           </a>
//                         </Typography>
//                       )}
//                       <Typography variant="body2" color="text.secondary" gutterBottom>
//                         {product.description}
//                       </Typography>
//                       {validSpecifications && (
//                         <div className="specifications-container">
//                           <h2>Specifications</h2>
//                           <div className="table-wrapper">
//                             <table className="specifications-table">
//                               <tbody>
//                                 {Object.entries(product).map(([key, value]) => {
//                                   const specifications = [
//                                     'model_name',
//                                     'brand',
//                                     'imaging_mode',
//                                     'battery_backup',
//                                     'touch_screen_monitor',
//                                     'monitor_resolution',
//                                     'monitor_size',
//                                     'weight',
//                                     'clinical_application',
//                                     'connectivity_ports',
//                                     'doppler_mode',
//                                     'throughput',
//                                     'dimensions',
//                                     'power_consumption',
//                                     'Printing Technology',
//                                     'AERB Approved',
//                                     'Operation Mode'
//                                   ];

//                                   if (specifications.includes(key) && value !== null && value !== '') {
//                                     return (
//                                       <tr key={key}>
//                                         <td>{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
//                                         <td>{value}</td>
//                                       </tr>
//                                     );
//                                   }
//                                   return null;
//                                 })}
//                               </tbody>
//                             </table>
//                           </div>
//                         </div>
//                       )}
//                     </Box>
//                   </Box>
//                 );
//               })}
//             </Box>
//           ) : (
//             <Typography variant="body1">
//               No products available for this category.
//             </Typography>
//           )}
//         </Box>
//       </Box>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { supabase } from '../supasbaseClient';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';  
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Drawer from '@mui/material/Drawer';
// import { LinearProgress } from '@mui/material';
// import { FaFileCircleCheck } from 'react-icons/fa6';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import '../styles/Products.css'
// import Link from '@mui/material/Link';

// export default function Products() {
//   const { categoryId } = useParams();
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     fetchCategories();
//     if (categoryId) {
//       fetchProducts(categoryId);
//     }
//   }, [categoryId]);

//   async function fetchCategories() {
//     try {
//       const response = await supabase.from('Product Categories').select('*');
//       if (response.error) throw response.error;
//       setCategories(response.data || []);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   }

//   async function fetchProducts(categoryId) {
//     setLoading(true);
//     try {
//       const numericCategoryId = parseInt(categoryId, 10);
//       if (isNaN(numericCategoryId)) throw new Error('Invalid category ID');

//       const productResponse = await supabase
//         .from('Products')
//         .select('*')
//         .eq('category_id', numericCategoryId);

//       if (productResponse.error) throw productResponse.error;

//       const productsData = productResponse.data || [];

//       const productIds = productsData.map((product) => product.id);
//       const imageResponse = await supabase
//         .from('Product Images')
//         .select('*')
//         .in('product_id', productIds);

//       if (imageResponse.error) throw imageResponse.error;

//       const imagesByProductId = imageResponse.data.reduce((acc, image) => {
//         acc[image.product_id] = image.image_url;
//         return acc;
//       }, {});

//       const productsWithImages = productsData.map((product) => ({
//         ...product,
//         images: imagesByProductId[product.id] || [],
//       }));

//       setProducts(productsWithImages);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const handleCategoryClick = (categoryId) => {
//     const category = categories.find((cat) => cat.id === categoryId);
//     const categoryName = category
//       ? category.category_name.replace(/\s+/g, '-')
//       : 'undefined';
//     navigate(`/products/${categoryId}/${categoryName}`);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const renderSidebar = (
//     <Box
//       sx={{
//         width: { xs: '250px', sm: '250px' },
//         p: 2,
//         height: '100%', // Ensure it takes full height
//         overflowY: 'auto', // Enable vertical scrolling
//         '&::-webkit-scrollbar': {
//         width: '8px', // Adjust scrollbar width
//       },
//       '&::-webkit-scrollbar-track': {
//         backgroundColor: '#f0f0f0', // Background color of the track
//         borderRadius: '4px',
//       },
//       '&::-webkit-scrollbar-thumb': {
//         backgroundColor: '#888', // Color of the thumb
//         borderRadius: '4px',
//       },
//       '&::-webkit-scrollbar-thumb:hover': {
//         backgroundColor: '#555', // Color of the thumb on hover
//       },
//       }}
//     >
//       <Typography variant="h6" gutterBottom>
//         Categories
//       </Typography>
//       <List>
//         {categories.map((category) => (
//           <ListItem key={category.id} disablePadding>
//             <ListItemButton
//               selected={String(category.id) === categoryId}
//               onClick={() => {
//                 handleCategoryClick(category.id);
//                 if (isMobileMenuOpen) toggleMobileMenu();
//               }}
//             >
//               <ListItemText primary={category.category_name} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//     </Box>
//   );
//   const currentCategory = categories.find((cat) => String(cat.id) === categoryId);

//   return (
//     <div>
//       <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
//         {/* Mobile Menu Toggle Button */}
//         <IconButton
//           sx={{ display: { xs: 'block', sm: 'none' }, position: 'absolute', top: 16, left: 16 }}
//           onClick={toggleMobileMenu}
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* Sidebar for Desktop and Drawer for Mobile */}
//         <Drawer
//           open={isMobileMenuOpen}
//           onClose={toggleMobileMenu}
//           anchor="left"
//           sx={{ display: { xs: 'block', sm: 'none' } }}
//         >
//           {renderSidebar}
//         </Drawer>

//         <Box
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             width: { sm: '250px' },
//             borderRight: '1px solid grey',
//           }}
//         >
//           {renderSidebar}
//         </Box>

//         {/* Products Grid */}
//         <Box
//           sx={{
//             flex: 1,
//             overflowY: 'auto',
//             p: 4,
//           }}
//         >
//           {/* Breadcrumbs */}
//         <Breadcrumbs aria-label="breadcrumb" sx={{p:1}}>
//             <Link underline="hover" color="inherit" onClick={() => navigate('/')}>
//               Home
//             </Link>
//             <Link underline="hover" color="inherit" onClick={() => navigate('/products')}>
//               Products
//             </Link>
//             {currentCategory && (
//               <Typography color="text.primary">{currentCategory.category_name}</Typography>
//             )}
//           </Breadcrumbs>
//           <Typography variant="h4" gutterBottom>
            
//           </Typography>
//           {loading ? (
//             <Typography variant="body1"> <LinearProgress /> </Typography>
//           ) : products.length > 0 ? (
//             <Box>
//               {products.map((product) => (
//                 <Box
//                   key={product.id}
//                   sx={{
//                     display: 'flex',
//                     flexDirection: { xs: 'column', sm: 'row' },
//                     alignItems: 'center',
//                     border: '1px solid grey',
//                     borderRadius: '8px',
//                     mb: 3,
//                     p: 2,
//                     gap: 2,
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                     bgcolor: 'white',
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: { xs: '100%', sm: '150px' },
//                       height: { xs: 'auto', sm: '150px' },
//                       overflow: 'hidden',
//                       borderRadius: '8px',
//                       flexShrink: 0,
//                     }}
//                   >
//                     <img
//                       src={product.images[0] || 'https://via.placeholder.com/150'}
//                       alt={product.product_name}
//                       style={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                       }}
//                     />
//                   </Box>

//                   <Box sx={{ flex: 1 }}>
//                     <Typography variant="h6" gutterBottom>
//                       {product.product_name}
//                     </Typography>
//                     <Typography variant="h6" color="text.secondary" gutterBottom sx={{ fontWeight: 'normal',color: 'primary.main',transition: 'all 0.3s ease','&:hover': {fontWeight: 'bold',color: 'primary.main', },}}>
//                       ₹ {product.price}.00
//                     </Typography>
//                     {product.brochure_url && (
//                       <Typography variant="body2" color="primary" gutterBottom>
//                         <a href={product.brochure_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
//                           View Brochure <FaFileCircleCheck/>
//                         </a>
//                       </Typography>
//                     )}
//                     <Typography variant="body2" color="text.secondary" gutterBottom>
//                       {product.description}
//                     </Typography>
//                     <div className="specifications-container">
//                       <h2>Specifications</h2>
//                       <div className="table-wrapper">
//                         <table className="specifications-table">
//                           <thead>
//                             <tr>
//                               <th>Property</th>
//                               <th>Value</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {Object.entries(product).map(([key, value]) => {
//                               // Define the specifications you want to display
//                               const specifications = [
//                                 'model_name',
//                                 'brand',
//                                 'imaging_mode',
//                                 'battery_backup',
//                                 'touch_screen_monitor',
//                                 'monitor_resolution',
//                                 'monitor_size',
//                                 'weight',
//                                 'clinical_application',
//                                 'connectivity_ports',
//                                 'doppler_mode',
//                                 'throughput',
//                                 'dimensions',
//                                 'power_consumption',
//                                 'Printing Technology',
//                                 'AERB Approved',
//                                 'Operation Mode'

//                               ];

//                               if (specifications.includes(key) && value !== null && value !== '') {
//                                 return (
//                                   <tr key={key}>
//                                     <td>{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
//                                     <td>{value}</td>
//                                   </tr>
//                                 );
//                               }
//                               return null;
//                             })}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//           ) : (
//             <Typography variant="body1">
//               No products available for this category.
//             </Typography>
//           )}
//         </Box>
//       </Box>
//     </div>
//   );
// } 


// stored for thumbnail click change to main image


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { supabase } from '../supasbaseClient';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import CircularProgress from '@mui/material/CircularProgress';

// export default function Products() {
//   const { categoryId } = useParams();
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCategories();
//     if (categoryId) {
//       fetchProducts(categoryId);
//     }
//   }, [categoryId]);

//   // Fetch all categories
//   async function fetchCategories() {
//     try {
//       const response = await supabase.from('Product Categories').select('*');
//       if (response.error) throw response.error;
//       setCategories(response.data || []);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//       setError('Failed to load categories.');
//     }
//   }

//   // Fetch products for a category
//   async function fetchProducts(categoryId) {
//     setLoading(true);
//     setError(null);
//     try {
//       const numericCategoryId = parseInt(categoryId, 10);
//       if (isNaN(numericCategoryId)) throw new Error('Invalid category ID');

//       const productResponse = await supabase
//         .from('Products')
//         .select('*')
//         .eq('category_id', numericCategoryId);

//       if (productResponse.error) throw productResponse.error;

//       const productsData = productResponse.data || [];
//       const productIds = productsData.map((product) => product.id);

//       const imageResponse = await supabase
//         .from('Product Images')
//         .select('*')
//         .in('product_id', productIds);

//       if (imageResponse.error) throw imageResponse.error;

//       const imagesByProductId = imageResponse.data.reduce((acc, image) => {
//         acc[image.product_id] = image.image_url || [];
//         return acc;
//       }, {});

//       const productsWithImages = productsData.map((product) => ({
//         ...product,
//         images: imagesByProductId[product.id] || [],
//       }));

//       setProducts(productsWithImages);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       setError('Failed to load products.');
//     } finally {
//       setLoading(false);
//     }
//   }

//   const handleCategoryClick = (categoryId) => {
//     navigate(`/products/${categoryId}`);
//   };

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
//       {/* Categories Sidebar */}
//       <Box
//         sx={{
//           width: { xs: '100px', sm: '250px' },
//           position: 'sticky',
//           top: 0,
//           height: '100vh',
//           overflowY: 'auto',
//           borderRight: '1px solid grey',
//           bgcolor: 'grey.100',
//           p: 2,
//         }}
//       >
//         <Typography variant="h6" gutterBottom>
//           Categories
//         </Typography>
//         <List>
//           {categories.map((category) => (
//             <ListItem key={category.id} disablePadding>
//               <ListItemButton
//                 selected={String(category.id) === categoryId}
//                 onClick={() => handleCategoryClick(category.id)}
//               >
//                 <ListItemText primary={category.category_name} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//       </Box>

//       {/* Products Grid */}
//       <Box
//         sx={{
//           flex: 1,
//           overflowY: 'auto',
//           p: 4,
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           Products
//         </Typography>

//         {loading ? (
//           <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//             <CircularProgress />
//           </Box>
//         ) : error ? (
//           <Typography variant="body1" color="error">
//             {error}
//           </Typography>
//         ) : products.length > 0 ? (
//           <Box>
//             {products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </Box>
//         ) : (
//           <Typography variant="body1">
//             No products available for this category.
//           </Typography>
//         )}
//       </Box>
//     </Box>
//   );
// }

// // Product Card Component
// function ProductCard({ product }) {
//   const [mainImage, setMainImage] = useState(product.images[0] || '');

//   const handleThumbnailClick = (image) => {
//     setMainImage(image);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: { xs: 'column', sm: 'row' },
//         alignItems: 'center',
//         border: '1px solid grey',
//         borderRadius: '8px',
//         mb: 3,
//         p: 2,
//         gap: 2,
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         bgcolor: 'white',
//       }}
//     >
//       {/* Product Image */}
//       <Box
//         sx={{
//           width: { xs: '100%', sm: '150px' },
//           height: { xs: 'auto', sm: '150px' },
//           overflow: 'hidden',
//           borderRadius: '8px',
//           flexShrink: 0,
//         }}
//       >
//         <img
//           src={mainImage || 'https://via.placeholder.com/150'}
//           alt={product.product_name}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//           }}
//         />
//         <Box
//           sx={{
//             display: 'flex',
//             gap: 1,
//             overflowX: 'auto',
//             mt: 1,
//           }}
//         >
//           {product.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`${product.product_name} ${index + 1}`}
//               style={{
//                 width: '50px',
//                 height: '50px',
//                 objectFit: 'cover',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//                 border: mainImage === image ? '2px solid blue' : '1px solid grey',
//               }}
//               onClick={() => handleThumbnailClick(image)}
//             />
//           ))}
//         </Box>
//       </Box>

//       {/* Product Details */}
//       <Box sx={{ flex: 1 }}>
//         <Typography variant="h6" gutterBottom>
//           {product.product_name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" gutterBottom>
//           {product.description}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Price: ${product.price}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Stock: {product.stock}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
