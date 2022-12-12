import React from 'react';
import styled from 'styled-components';

import { GrFormClose } from "react-icons/gr";

type OptionObject = {
    dynamicLightsSystemPlus: boolean,
    NightVisionAssist: boolean,
    PremiumPackage: boolean,
}

type Props = {
    car: string,
    color: string,
    rims: boolean,
    options: OptionObject,
}

export const Summary = ({car, color, rims, options}: Props) => {

    const { dynamicLightsSystemPlus, NightVisionAssist, PremiumPackage } = options;

    let modelPrice = '';

    switch(car){
        case 'carrera 911':
            modelPrice = '106,100';
            break;
        case 'macan':
            modelPrice = '57,500';
            break;
        case 'panamera':
            modelPrice = '92,400';
            break;
    }

    return(
        <>
            <Heading>SUMMARY</Heading>
            <table>
                <tr>
                    <td>Porsche model {car[0].toUpperCase() + car.substring(1)}</td>
                    <td>{modelPrice}</td>
                </tr>
                <tr>
                    <td>Custom color</td>
                    <td>{color !== 'white' ? '1,100' : <GrFormClose />}</td>
                </tr>
                <tr>
                    <td>Dark themed rims</td>
                    <td>{rims ? '2,450' : <GrFormClose />}</td>
                </tr>
                <tr>
                    <td>Dynamic Lights System Plus</td>
                    <td>{dynamicLightsSystemPlus ? '720' : <GrFormClose />}</td>
                </tr>
                <tr>
                    <td>Night Vision Assist</td>
                    <td>{NightVisionAssist ? '1,050' : <GrFormClose />}</td>
                </tr>
                <tr>
                    <td>Dynamic Lights System Plus</td>
                    <td>{PremiumPackage ? '4,200' : <GrFormClose />}</td>
                </tr>
            </table>
        </>
    )
}

const Heading = styled.h1`
    padding: 40px 0 0;
    border-bottom: 2px solid #dedede;
    letter-spacing: 3px;
`