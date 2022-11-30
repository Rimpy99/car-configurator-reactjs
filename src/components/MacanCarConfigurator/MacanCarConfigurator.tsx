import React, { useEffect, useState } from "react";
import { ImageSlider } from "../ImageSlider";

import { Header } from "../Header/Header";

//img imports
import macanBlack1 from '../../assets/images/models/macan/macanblack1.jpg';
import macanBlack2 from '../../assets/images/models/macan/macanblack2.jpg';
import macanBlack3 from '../../assets/images/models/macan/macanblack3.jpg';
import macanWhite1 from '../../assets/images/models/macan/macanwhite1.jpg';
import macanWhite2 from '../../assets/images/models/macan/macanwhite2.jpg';
import macanWhite3 from '../../assets/images/models/macan/macanwhite3.jpg';
import macanBlue1 from '../../assets/images/models/macan/macanblue1.jpg';
import macanBlue2 from '../../assets/images/models/macan/macanblue2.jpg';
import macanBlue3 from '../../assets/images/models/macan/macanblue3.jpg';

import macanBlack1Rims from '../../assets/images/models/macan/rims/macanblack1rims.jpg';
import macanBlack2Rims from '../../assets/images/models/macan/rims/macanblack2rims.jpg';
import macanBlack3Rims from '../../assets/images/models/macan/rims/macanblack3rims.jpg';
import macanWhite1Rims from '../../assets/images/models/macan/rims/macanwhite1rims.jpg';
import macanWhite2Rims from '../../assets/images/models/macan/rims/macanwhite2rims.jpg';
import macanWhite3Rims from '../../assets/images/models/macan/rims/macanwhite3rims.jpg';
import macanBlue1Rims from '../../assets/images/models/macan/rims/macanblue1rims.jpg';
import macanBlue2Rims from '../../assets/images/models/macan/rims/macanblue2rims.jpg';
import macanBlue3Rims from '../../assets/images/models/macan/rims/macanblue3rims.jpg';

type Props ={
    car: string,
}

export const MacanCarConfigurator = ({car}: Props) => {

    const [images, setImages] = useState<string[]>([''])
    const [color, setColor] = useState<string>('white');
    const [rims, setRims] = useState<boolean>(false);

    useEffect(() => {

        if(rims){
            switch(color){
                case 'white':
                    setImages([macanWhite1Rims, macanWhite2Rims, macanWhite3Rims]);
                    break;
                case 'black':
                    setImages([macanBlack1Rims, macanBlack2Rims, macanBlack3Rims]);
                    break;
                case 'blue':
                    setImages([macanBlue1Rims, macanBlue2Rims, macanBlue3Rims]);
                    break;
            }
        }else{
            switch(color){
                case 'white':
                    setImages([macanWhite1, macanWhite2, macanWhite3]);
                    break;
                case 'black':
                    setImages([macanBlack1, macanBlack2, macanBlack3]);
                    break;
                case 'blue':
                    setImages([macanBlue1, macanBlue2, macanBlue3]);
                    break;
            }
        }

    }, [color, rims])

    return(
        <>
            <Header carModel={car.toUpperCase()}/>
            <ImageSlider images={images}/>
        </>
    )
}