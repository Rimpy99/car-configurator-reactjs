import React from 'react';
import { useState, useEffect } from 'react';
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

type Prices = {
    model: number,
    color: number,
    rims: number,
    dynamicLightsSystemPlus: number,
    NightVisionAssist: number,
    PremiumPackage: number,
}

export const Summary = ({car, color, rims, options}: Props) => {

    const { dynamicLightsSystemPlus, NightVisionAssist, PremiumPackage } = options;

    let modelPrice = 0;

    switch(car){
        case 'carrera 911':
            modelPrice = 106100;
            break;
        case 'macan':
            modelPrice = 57500;
            break;
        case 'panamera':
            modelPrice = 92400;
            break;
    }

    const prices = {
        model: modelPrice,
        color: color !== 'white' ? 1100 : 0,
        rims: rims ? 2450 : 0,
        dynamicLightsSystemPlus: options.dynamicLightsSystemPlus ? 720 : 0,
        NightVisionAssist: options.NightVisionAssist ? 1050 : 0,
        PremiumPackage: options.PremiumPackage ? 4200 : 0,
    };


    return(
        <>
            <Heading>SUMMARY</Heading>
            <table>
                <tr>
                    <td>Porsche model {car[0].toUpperCase() + car.substring(1)}</td>
                    <td>{'$' + prices.model.toLocaleString("en-US")}</td>
                </tr>
                <tr>
                    <td>Custom color</td>
                    <td>{prices.color ? '$' + prices.color.toLocaleString("en-US") : <GrFormClose />}</td>
                </tr>
                <tr>
                    <td>Dark themed rims</td>
                    <td>{prices.rims ? '$' + prices.rims.toLocaleString("en-US") : <GrFormClose />}</td>
                </tr>
                <tr>
                    <td>Dynamic Lights System Plus</td>
                    <td>{prices.dynamicLightsSystemPlus ? '$' + prices.dynamicLightsSystemPlus.toLocaleString("en-US") : <GrFormClose />}</td>
                </tr>
                <tr>
                    <td>Night Vision Assist</td>
                    <td>{prices.NightVisionAssist ? '$' + prices.NightVisionAssist.toLocaleString("en-US") : <GrFormClose />}</td>
                </tr>
                <tr>
                    <td>Dynamic Lights System Plus</td>
                    <td>{prices.PremiumPackage ? '$' + prices.PremiumPackage.toLocaleString("en-US") : <GrFormClose />}</td>
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