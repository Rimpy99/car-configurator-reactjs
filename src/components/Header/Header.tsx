import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import { BiArrowBack } from "react-icons/bi";

type Props = {
    carModel: string,
}

export const Header = ({carModel}: Props) => {

    const navigate = useNavigate();

    return(
        <Container>
            <IconContainer onClick={() => navigate('/')}>
                <BiArrowBack size={25}/>
            </IconContainer>
            <h1>{carModel} CONFIGURATOR</h1>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    position: relative;
    border-bottom: 2px solid #E8E8E8;
`

const IconContainer = styled.div`
    display: flex;
    position: absolute;
    top: 15px;
    left: 20px;
    padding: 15px;
    cursor: pointer;
`