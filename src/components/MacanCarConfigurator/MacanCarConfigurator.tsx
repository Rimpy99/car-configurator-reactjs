import React, { useEffect, useState } from "react";
import { ImageSlider } from "../ImageSlider";

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

import macanBlack1Rims from '../../assets/images/models/macan/macanblack1rims.jpg';
import macanBlack2Rims from '../../assets/images/models/macan/macanblack2rims.jpg';
import macanBlack3Rims from '../../assets/images/models/macan/macanblack3rims.jpg';
import macanWhite1Rims from '../../assets/images/models/macan/macanwhite1rims.jpg';
import macanWhite2Rims from '../../assets/images/models/macan/macanwhite2rims.jpg';
import macanWhite3Rims from '../../assets/images/models/macan/macanwhite3rims.jpg';
import macanBlue1Rims from '../../assets/images/models/macan/macanblue1rims.jpg';
import macanBlue2Rims from '../../assets/images/models/macan/macanblue2rims.jpg';
import macanBlue3Rims from '../../assets/images/models/macan/macanblue3rims.jpg';

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
            {/* <ImageSlider images={images}/> */}
            {/* <img src={require('../../assets/images/models/macan/macanblack1.jpg')} alt="nie" /> */}
        </>
    )
}