import React from 'react';
import Slider from "react-slick";

export const ImageSlider: React.FC = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return(
        <>
            <Slider {...sliderSettings}>
                <div style={{backgroundColor: 'red'}}></div>
                <div style={{backgroundColor: 'yellow'}}></div>
                <div style={{backgroundColor: 'green'}}></div>
            </Slider>
        </>
    );
}