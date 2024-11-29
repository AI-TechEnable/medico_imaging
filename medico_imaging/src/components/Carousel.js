import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from '../components/Item'
import Slider from '../assets/Slider.json'


function carousel()
{
    return (
        <Carousel>
            {
                Slider.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

export default carousel