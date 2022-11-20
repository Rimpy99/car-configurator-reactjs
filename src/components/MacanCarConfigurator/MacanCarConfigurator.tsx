import React, { useState } from "react";
import { ImageSlider } from "../ImageSlider";

//img imports
// import macan from '../../assets/images/models/macan/macan.json';


type Props ={
    car: string,
}

export const MacanCarConfigurator = ({car}: Props) => {

    const [color, setColor] = useState('white');
    const [rims, setRims] = useState(false);

    return(
        <>
            <header>{car.toUpperCase()} CONFIGURATOR</header>
            <ImageSlider/>
            <img src={require('../../assets/images/models/macan/macanblack1.jpg')} alt="nie" />
        </>
    )
}