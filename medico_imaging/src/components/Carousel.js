import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Slider from '../assets/Slider.json';
import '../styles/Carousel.css'

// Item component
function Item({ item }) {
    return (
        <Paper style={{ position: "relative" }}>
            <img 
                src={item.image_url} 
                alt={item.name} 
                // style={{ width: "100%", height: "70vh", objectFit: "cover" }}  
                className="carousel-image"  // Apply the class here
                
            />
            
            {/* Transparent overlay at the bottom of the image */}
            <div 
                className="description" 
                style={{ 
                    position: "absolute", 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                    color: "white", // White text color
                    padding: "10px", 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    flexDirection: "column" 
                }}
            >
                <h2 style={{ fontVariant: "all-petite-caps",color:"White"}}>{item.name}</h2>
                <p style={{ fontVariant: "all-petite-caps" }}>{item.description}</p>
                <Button className="CheckButton" variant="outlined" style={{height: "25px",backgroundColor:"white"}}>
                    Check it out!
                </Button>
                
            </div>
        </Paper>
    );
}

// Carousel component
function CarouselComponent() {
    return (
        <Carousel>
            {
                Slider.map(item => <Item key={item.id} item={item} />)
            }
        </Carousel>
    );
}

export default CarouselComponent;
