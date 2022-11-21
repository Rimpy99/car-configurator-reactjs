import React, { useEffect, useState } from "react";
import { ImageSlider } from "../ImageSlider";

//img imports
import macan from '../../assets/images/models/macan/macan.json';


type Props ={
    car: string,
}

export const MacanCarConfigurator = ({car}: Props) => {

    const [images, setImages] = useState(macan.basic.white)
    const [color, setColor] = useState('white');
    const [rims, setRims] = useState(false);

    useEffect(() => {

        if(rims){
            switch(color){
                case 'white':
                    setImages(macan.rims.white);
                    break;
                case 'black':
                    setImages(macan.rims.black);
                    break;
                case 'blue':
                    setImages(macan.rims.blue);
                    break;
            }
        }else{
            switch(color){
                case 'white':
                    setImages(macan.basic.white);
                    break;
                case 'black':
                    setImages(macan.basic.black);
                    break;
                case 'blue':
                    setImages(macan.basic.blue);
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