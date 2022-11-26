import React, { useEffect, useState } from "react";
import { ImageSlider } from "../ImageSlider";

//img imports
import carrera from '../../assets/images/models/p911/p911.json';

type Props ={
    car: string,
}

export const CarreraCarConfigurator = ({car}: Props) => {

    const [images, setImages] = useState(carrera.basic.white)
    const [color, setColor] = useState('white');
    const [rims, setRims] = useState(false);

    useEffect(() => {

        if(rims){
            switch(color){
                case 'white':
                    setImages(carrera.rims.white);
                    break;
                case 'black':
                    setImages(carrera.rims.black);
                    break;
                case 'red':
                    setImages(carrera.rims.red);
                    break;
            }
        }else{
            switch(color){
                case 'white':
                    setImages(carrera.basic.white);
                    break;
                case 'black':
                    setImages(carrera.basic.black);
                    break;
                case 'red':
                    setImages(carrera.basic.red);
                    break;
            }
        }

    }, [color, rims])

    return(
        <>
            <header>{car.toUpperCase()} CONFIGURATOR</header>
            {/* <ImageSlider images={images}/> */}
            <img src={require('../../assets/images/models/macan/macanblack1.jpg')} alt="nie" />
        </>
    )
}