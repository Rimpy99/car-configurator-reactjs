import React, { useEffect, useState } from "react";

import { CarConfiguratorContent } from "../CarConfiguratorContent/CarConfiguratorContent";

//img imports
import carreraBlack1 from '../../assets/images/models/p911/p911black1.jpg';
import carreraBlack2 from '../../assets/images/models/p911/p911black2.jpg';
import carreraBlack3 from '../../assets/images/models/p911/p911black3.jpg';
import carreraWhite1 from '../../assets/images/models/p911/p911white1.jpg';
import carreraWhite2 from '../../assets/images/models/p911/p911white2.jpg';
import carreraWhite3 from '../../assets/images/models/p911/p911white3.jpg';
import carreraRed1 from '../../assets/images/models/p911/p911red1.jpg';
import carreraRed2 from '../../assets/images/models/p911/p911red2.jpg';
import carreraRed3 from '../../assets/images/models/p911/p911red3.jpg';

import carreraBlack1Rims from '../../assets/images/models/p911/rims/p911black1rims.jpg';
import carreraBlack2Rims from '../../assets/images/models/p911/rims/p911black2rims.jpg';
import carreraBlack3Rims from '../../assets/images/models/p911/rims/p911black3rims.jpg';
import carreraWhite1Rims from '../../assets/images/models/p911/rims/p911white1rims.jpg';
import carreraWhite2Rims from '../../assets/images/models/p911/rims/p911white2rims.jpg';
import carreraWhite3Rims from '../../assets/images/models/p911/rims/p911white3rims.jpg';
import carreraRed1Rims from '../../assets/images/models/p911/rims/p911red1rims.jpg';
import carreraRed2Rims from '../../assets/images/models/p911/rims/p911red2rims.jpg';
import carreraRed3Rims from '../../assets/images/models/p911/rims/p911red3rims.jpg';

type Props ={
    car: string,
}

export const CarreraCarConfigurator = ({car}: Props) => {

    const [images, setImages] = useState<string[]>([''])
    const [color, setColor] = useState<string>('white');
    const [rims, setRims] = useState<boolean>(false);
    const [options, setOptions] = useState([
        {
            optionName: 'Dynamic lights system plus',
            status: false,
        },
        {
            optionName: 'Night vision assist',
            status: false,
        },
        {
            optionName: 'Premium package',
            status: false,
        }
    ])

    const colors = ['white', 'black', 'red'];

    useEffect(() => {

        if(rims){
            switch(color){
                case 'white':
                    setImages([carreraWhite1Rims, carreraWhite2Rims, carreraWhite3Rims]);
                    break;
                case 'black':
                    setImages([carreraBlack1Rims, carreraBlack2Rims, carreraBlack3Rims]);
                    break;
                case 'red':
                    setImages([carreraRed1Rims, carreraRed2Rims, carreraRed3Rims]);
                    break;
            }
        }else{
            switch(color){
                case 'white':
                    setImages([carreraWhite1, carreraWhite2, carreraWhite3]);
                    break;
                case 'black':
                    setImages([carreraBlack1, carreraBlack2, carreraBlack3]);
                    break;
                case 'red':
                    setImages([carreraRed1, carreraRed2, carreraRed3]);
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
