import React from 'react';
import styled from "styled-components";

import MacanLogo from '../assets/images/models/macan/macanlogo.png';
import PanameraLogo from '../assets/images/models/panamera/panameralogo.png';
import Porsche911Logo from '../assets/images/models/p911/p911logo.png';

export const HomePage: React.FC = () => {

    return(
        <>
            <HomePageContainer>
                <h1>CHOOSE YOUR PORSCHE</h1>
                <NavBar>
                    <Card>
                        <Model src={MacanLogo}/>
                        <h2>Macan</h2>
                    </Card>
                    <Card>
                        <Model src={PanameraLogo}/>
                        <h2>Panamera</h2>
                    </Card>
                    <Card>
                        <Model src={Porsche911Logo}/>
                        <h2>911 Carrera</h2>
                    </Card>
                </NavBar>
            </HomePageContainer>
        </>
    )
}

//VARIABLES FOR STYLES
const headerFontColor = '#191a5c';


//STYLES
const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    padding-top: 40px;
    font-size: 25px;
    color: ${headerFontColor};
    letter-spacing: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NavBar = styled.div`
    padding-top: 150px;
`;

const Card = styled.div`
    letter-spacing: 1px;
    margin: 15px;
    text-align: left;
    padding: 60px 0;

    h2{
        padding-left: 20px;
    }
`;

const Model = styled.img`
    width: 350px;
`;