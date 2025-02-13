// src/pages/Home.js
import React,{useEffect,useState} from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Home.css'
import AppAppBar from '../components/AppAppBar';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import FAQ from '../components/Faq';
import Footer from '../components/Footer';
import Highlights from '../components/Highlight';
import { supabase } from '../supasbaseClient';
import Testimonials from '../components/Testimonials';


const Home = () => {

  const[products,setProducts]=useState([]);
  console.log(products);

  useEffect(()=>{
    getProducts();
  }, [])

  async function getProducts() {
    try {
      const response = await supabase
        .from("Product Categories")
        .select("*")
        .limit(19);
  
      if (response.error) {
        throw response.error;
      }
  
      const data = response.data;
      if (data != null) {
        setProducts(data);  // Set the products state to the fetched data
      }
    } catch (error) {
      alert(error.message);
    }
  }
  
  // console.log(products);

  return (
    <div className="home">  
      <Carousel/> 
      <AppAppBar/>
      <Hero/>

      {/* {products.map((product)=>(
        <div key={product.id}>
          <li>{product.image_url}</li>
        </div>
      ))} */}
      
      <Highlights/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
      
      
    </div>
  );
};

export default Home;
