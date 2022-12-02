import React from 'react';
import styled from "styled-components";

import { ImageSlider } from "../ImageSlider/ImageSlider";
import { Header } from "../Header/Header";
import { Options } from '../Options/Options';

type Props = {
    car: string,
    images: string[],
}

export const CarConfiguratorContent = ({car, images}: Props) => {

    return(
        <>
            <Header carModel={car.toUpperCase()}/>
            <ContentContainer>
                <Content>
                    <ImageSlider images={images}/>
                    <Options />
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