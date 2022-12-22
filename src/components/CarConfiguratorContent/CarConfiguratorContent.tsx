import React, {Dispatch, SetStateAction} from 'react';
import styled from "styled-components";

import { ImageSlider } from "../ImageSlider/ImageSlider";
import { Header } from "../Header/Header";
import { Options } from '../Options/Options';
import { Summary } from '../Summary/Summary';

type OptionObject = {
    optionName: string,
    status: boolean,
}

type Props = {
    car: string,
    images: string[],
    color: string,
    colors: string[],
    setColor: Dispatch<SetStateAction<string>>,
    setRims: Dispatch<SetStateAction<boolean>>,
    rims: boolean,
    options: OptionObject[],
    setOptions: Dispatch<SetStateAction<OptionObject[]>>
}

export const CarConfiguratorContent = ({car, images, color, colors, setColor, setRims, rims, options, setOptions}: Props) => {

    return(
        <>
            <Header carModel={car.toUpperCase()}/>
            <ContentContainer>
                <Content>
                    <ImageSlider images={images} chosenColor={color}/>
                    <Options 
                        colors={colors} 
                        setColor={setColor} 
                        setRims={setRims}
                        options={options}
                        setOptions={setOptions}
                    />
                    <Summary
                        car={car}
                        color={color}
                        rims={rims}
                        options={options}
                    />
                </Content>
            </ContentContainer>
        </>
    )
}

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #F5F5F5;
`;

const Content = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    align-items: center;
`;