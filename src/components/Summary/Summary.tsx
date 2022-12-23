import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GrFormClose } from "react-icons/gr";

type OptionObject = {
    optionName: string,
    status: boolean,
}

type Props = {
    car: string,
    color: string,
    rims: boolean,
    options: OptionObject[],
}

export const Summary = ({car, color, rims, options}: Props) => {

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

    const prices = [
        {
            option: `Porsche model ${car[0].toUpperCase() + car.substring(1)}`,
            price: modelPrice,
        },
        {
            option: 'Custom color',
            price: color !== 'white' ? 1100 : 0,
        },
        {
            option: 'Dark themed rims',
            price: rims ? 2450 : 0,
        },
        {
            option: 'Dynamic Lights System Plus',
            price: options[0].status ? 720 : 0,
        },
        {
            option: 'Night Vision Assist',
            price: options[1].status ? 1050 : 0,
        },
        {
            option: 'Premium Package',
            price: options[2].status ? 4200 : 0,
        },
    ]

    let sum: number = 0;

    prices.forEach(obj => {
        sum += obj.price;
    })

    return(
        <>
            <Heading>SUMMARY</Heading>
            <Table>
                <tbody>
                    {
                        prices.map(({option, price}) => {
                            
                            const rowKey = option.split(' ').join('');

                            return(
                                <Row key={`option${rowKey}`}>
                                    <Cell>{option}</Cell>
                                    <PriceCell>{price ? '$' + price.toLocaleString('en-US') : <GrFormClose />}</PriceCell>
                                </Row>
                            );
                        })
                    }
                    <LastRow>
                        <Cell>SUM:</Cell>
                        <PriceCell>${sum.toLocaleString("en-US")}</PriceCell>
                    </LastRow>
                </tbody>
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
    margin-bottom: 80px;

    @media (max-width: 540px){
        width: 100%;
    }
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