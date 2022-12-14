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

    const pricesValues = Object.values(prices);

    const sum = pricesValues.reduce((accumator, value) => {
        return accumator + value;
    }, 0);

    return(
        <>
            <Heading>SUMMARY</Heading>
            <Table>
                <Row>
                    <Cell>Porsche model {car[0].toUpperCase() + car.substring(1)}</Cell>
                    <PriceCell>{'$' + prices.model.toLocaleString("en-US")}</PriceCell>
                </Row>
                <Row>
                    <Cell>Custom color</Cell>
                    <PriceCell>{prices.color ? '$' + prices.color.toLocaleString("en-US") : <GrFormClose />}</PriceCell>
                </Row>
                <Row>
                    <Cell>Dark themed rims</Cell>
                    <PriceCell>{prices.rims ? '$' + prices.rims.toLocaleString("en-US") : <GrFormClose />}</PriceCell>
                </Row>
                <Row>
                    <Cell>Dynamic Lights System Plus</Cell>
                    <PriceCell>{prices.dynamicLightsSystemPlus ? '$' + prices.dynamicLightsSystemPlus.toLocaleString("en-US") : <GrFormClose />}</PriceCell>
                </Row>
                <Row>
                    <Cell>Night Vision Assist</Cell>
                    <PriceCell>{prices.NightVisionAssist ? '$' + prices.NightVisionAssist.toLocaleString("en-US") : <GrFormClose />}</PriceCell>
                </Row>
                <Row>
                    <Cell>Dynamic Lights System Plus</Cell>
                    <PriceCell>{prices.PremiumPackage ? '$' + prices.PremiumPackage.toLocaleString("en-US") : <GrFormClose />}</PriceCell>
                </Row>
                <LastRow>
                    <Cell>SUM:</Cell>
                    <PriceCell>${sum.toLocaleString("en-US")}</PriceCell>
                </LastRow>
            </Table>
        </>
    )
}

const Heading = styled.h1`
    padding: 60px 0 0;
    border-bottom: 2px solid #dedede;
    letter-spacing: 3px;
`;

const Table = styled.table`
    font-size: 25px;
    border-collapse: collapse;
    margin-top: 30px;
    width: 500px;
`;

const Row = styled.tr`
    border-top: 2px solid #dedede;
    border-left: 2px solid #dedede;
    border-right: 2px solid #dedede;
`;

const LastRow = styled.tr`
    border: 2px solid #b3b3b3;
    background-color: #dedede;
`;

const Cell = styled.td`
    padding: 0 15px;
`

const PriceCell = styled.td`
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 15px;
`