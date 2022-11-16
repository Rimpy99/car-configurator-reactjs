import React from 'react';
import styled from "styled-components";

import MacanLogo from '../../assets/images/models/macan/macanlogo.png';
import PanameraLogo from '../../assets/images/models/panamera/panameralogo.png';
import Porsche911Logo from '../../assets/images/models/p911/p911logo.png';
import { Link, useNavigate } from 'react-router-dom';

type CardData = {
    image: string,
    name: string,
}

const CardsData: CardData[] = [
    {
        image: MacanLogo,
        name: 'Macan',
    },
    {
        image: PanameraLogo,
        name: 'Panamera',
    },
    {
        image: Porsche911Logo,
        name: '911',
    },
]

export const HomePage = () => {

    const navigate = useNavigate();

    return(
        <>
            <HomePageContainer>
                <h1>CHOOSE YOUR PORSCHE</h1>
                <NavBar>
                    {
                        CardsData.map(({image, name}) => {
                            return(
                                <div
                                    // to={`porsche${name}`} 
                                    onClick={() => navigate(`porsche${name}`)}
                                    style={{ textDecoration: 'none' }}
                                    key={name}
                                    data-testid="HomePage-Link"
                                >
                                    <Card>
                                        <Model src={`${image}`}/>
                                        <h2>{name === '911' ? `${name} Carrera` : name}</h2>
                                    </Card>
                                </div>
                            )
                        })
                    }
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