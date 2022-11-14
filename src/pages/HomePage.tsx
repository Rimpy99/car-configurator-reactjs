import React from 'react';
import styled from "styled-components";

import MacanLogo from '../assets/images/models/macan/macanlogo.png';
import PanameraLogo from '../assets/images/models/panamera/panameralogo.png';
import Porsche911Logo from '../assets/images/models/p911/p911logo.png';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {

    return(
        <>
            <HomePageContainer>
                <h1>CHOOSE YOUR PORSCHE</h1>
                <NavBar>
                    <Link to="/porscheMacan" style={{ textDecoration: 'none' }}>
                        <Card>
                            <Model src={MacanLogo}/>
                            <h2>Macan</h2>
                        </Card>
                    </Link>
                    <Link to="/porschePanamera" style={{ textDecoration: 'none' }}>
                        <Card>
                            <Model src={PanameraLogo}/>
                            <h2>Panamera</h2>
                        </Card>
                    </Link>
                    <Link to="/porsche911" style={{ textDecoration: 'none' }}>
                        <Card>
                            <Model src={Porsche911Logo}/>
                            <h2>911 Carrera</h2>
                        </Card>
                    </Link>
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
    display: flex;
    border-bottom: 2px solid #ededed;
`;

const Card = styled.div`
    letter-spacing: 1px;
    margin: 15px;
    padding: 60px 30px;
    margin: 30px;
    border-radius: 7px;
    cursor: pointer;
    user-select: none;
    border: 2px solid transparent;
    transition: all .2s ease-in-out;
    
    h2{
        font-weight: 100;
        color: ${headerFontColor};
    }
    
    &:hover{
        // border: 2px solid ${headerFontColor};
        background-color: #ededed;
    }
`;

const Model = styled.img`
    width: 350px;
`;