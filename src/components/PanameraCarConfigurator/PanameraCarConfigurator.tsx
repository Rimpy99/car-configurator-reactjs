import React, { useEffect, useState } from "react";

import { CarConfiguratorContent } from "../CarConfiguratorContent/CarConfiguratorContent";

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
import panameraBlue1 from '../../assets/images/models/panamera/panamerablue1.jpg';
import panameraBlue2 from '../../assets/images/models/panamera/panamerablue2.jpg';
import panameraBlue3 from '../../assets/images/models/panamera/panamerablue3.jpg';
import panameraBlue1Rims from '../../assets/images/models/panamera/rims/panamerablue1rims.jpg';
import panameraBlue2Rims from '../../assets/images/models/panamera/rims/panamerablue2rims.jpg';
import panameraBlue3Rims from '../../assets/images/models/panamera/rims/panamerablue3rims.jpg';

type Props ={
    car: string,
}

export const PanameraCarConfigurator = ({car}: Props) => {

    const [images, setImages] = useState<string[]>([''])
    const [color, setColor] = useState<string>('white');
    const [rims, setRims] = useState<boolean>(false);
    const [options, setOptions] = useState({
        dynamicLightsSystemPlus: false,
        NightVisionAssist: false,
        PremiumPackage: false,
    })

    const colors = ['white', 'black', 'darkblue'];

    useEffect(() => {

        if(rims){
            switch(color){
                case 'white':
                    setImages([panameraWhite1Rims, panameraWhite2Rims, panameraWhite3Rims]);
                    break;
                case 'black':
                    setImages([panameraBlack1Rims, panameraBlack2Rims, panameraBlack3Rims]);
                    break;
                case 'darkblue':
                    setImages([panameraBlue1Rims, panameraBlue2Rims, panameraBlue3Rims]);
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
                case 'darkblue':
                    setImages([panameraBlue1, panameraBlue2, panameraBlue3]);
                    break;
            }
        }

    }, [color, rims])

    return(
        <>
            <CarConfiguratorContent 
                car={car} 
                images={images} 
                color={color}
                colors={colors} 
                setColor={setColor} 
                setRims={setRims} 
                rims={rims}
                options={options}
                setOptions={setOptions}
            />
        </>
    )
}