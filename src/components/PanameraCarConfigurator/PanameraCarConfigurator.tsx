import React, { useEffect, useState } from "react";
import { ImageSlider } from "../ImageSlider";

//img imports
import panamera from '../../assets/images/models/macan/macan.json';

type Props ={
    car: string,
}

export const MacanCarConfigurator = ({car}: Props) => {

    const [images, setImages] = useState(panamera.basic.white)
    const [color, setColor] = useState('white');
    const [rims, setRims] = useState(false);

    useEffect(() => {

        if(rims){
            switch(color){
                case 'white':
                    setImages(panamera.rims.white);
                    break;
                case 'black':
                    setImages(panamera.rims.black);
                    break;
            }
        }else{
            switch(color){
                case 'white':
                    setImages(panamera.basic.white);
                    break;
                case 'black':
                    setImages(panamera.basic.black);
                    break;
            }
        }

    }, [color, rims])

    return(
        <>
            <header>{car.toUpperCase()} CONFIGURATOR</header>
            <ImageSlider images={images}/>
            <img src={require('../../assets/images/models/macan/macanblack1.jpg')} alt="nie" />
        </>
    )
}