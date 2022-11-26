import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

type Props = {
    images: string[],
}

export const ImageSlider = ({images}: Props) => {

    // const imagesArray = [PANAMERA_IMAGES.basic.white.img1, PANAMERA_IMAGES.basic.white.img2, PANAMERA_IMAGES.basic.white.img3];

    // console.log(PANAMERA_IMAGES);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    console.log(images)

    return(
        <div> 
            {/* {imagesArray.map(img => {
                    return(
                        <img src={img} alt='teeeeeeeeeeee'/>
                    )
            })} */}
            <img src={images[2]} alt="t" />
            {/* <img src={require()} alt="" /> */}
        </div>
    );
}

