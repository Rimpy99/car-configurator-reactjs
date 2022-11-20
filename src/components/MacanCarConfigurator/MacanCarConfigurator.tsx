import React from "react";
import { ImageSlider } from "../ImageSlider";

type Props ={
    car: string,
}

export const MacanCarConfigurator = ({car}: Props) => {

    return(
        <>
            <header>{car.toUpperCase()} CONFIGURATOR</header>
            <ImageSlider/>
        </>
    )
}