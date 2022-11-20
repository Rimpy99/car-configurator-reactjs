import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
export const ImageSlider: React.FC = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const [ , ] = useState('');
    const [variant, setVariant] = useState({
        color: 'white',
        rims: 'false',
    });

    // useEffect(() => {
        
    // }, [carColor])

    return(
        <> 
            <Slider {...sliderSettings}>
                <img src={macanOptions.basic.black.p1} />
            </Slider>
        </>
    );
}