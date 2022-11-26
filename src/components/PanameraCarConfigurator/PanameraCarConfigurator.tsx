import React, { useEffect, useState } from "react";
import { ImageSlider } from "../ImageSlider";

//img imports
import panameraBlack1 from '../../assets/images/models/panamera/panamerablack1.jpg';
import panameraBlack2 from '../../assets/images/models/panamera/panamerablack2.jpg';
import panameraBlack3 from '../../assets/images/models/panamera/panamerablack3.jpg';
import panameraBlack1Rims from '../../assets/images/models/panamera/rims/panamerablack1rims.jpg';
import panameraBlack2Rims from '../../assets/images/models/panamera/rims/panamerablack2rims.jpg';
import panameraBlack3Rims from '../../assets/images/models/panamera/rims/panamerablack3rims.jpg';
import panameraWhite1 from '../../assets/images/models/panamera/panamerawhite1.jpg';
import panameraWhite2 from '../../assets/images/models/panamera/panamerawhite2.jpg';
import panameraWhite3 from '../../assets/images/models/panamera/panamerawhite3.jpg';
import panameraWhite1Rims from '../../assets/images/models/panamera/rims/panamerawhite1rims.jpg';
import panameraWhite2Rims from '../../assets/images/models/panamera/rims/panamerawhite2rims.jpg';
import panameraWhite3Rims from '../../assets/images/models/panamera/rims/panamerawhite3rims.jpg';

type Props ={
    car: string,
}

export const PanameraCarConfigurator = ({car}: Props) => {

    const [images, setImages] = useState<string[]>([''])
    const [color, setColor] = useState<string>('white');
    const [rims, setRims] = useState<boolean>(false);

    useEffect(() => {

        if(rims){
            switch(color){
                case 'white':
                    setImages([panameraWhite1Rims, panameraWhite2Rims, panameraWhite3Rims]);
                    break;
                case 'black':
                    setImages([panameraBlack1Rims, panameraBlack2Rims, panameraBlack3Rims]);
                    break;
            }
        }else{
            switch(color){
                case 'white':
                    setImages([panameraWhite1, panameraWhite2, panameraWhite3]);
                    break;
                case 'black':
                    setImages([panameraBlack1, panameraBlack2, panameraBlack3]);
                    break;
            }
        }

    }, [color, rims])

    return(
        <>
            <header>{car.toUpperCase()} CONFIGURATOR</header>
            <ImageSlider images={images}/>
            {/* <img src={require('../../assets/images/models/macan/macanblack1.jpg')} alt="nie" /> */}
        </>
    )
}