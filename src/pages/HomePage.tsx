import React from 'react';
import styled from "styled-components";

const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

export const HomePage: React.FC = () => {

    return(
        <>
            <HomePageContainer>
                <h1>CHOOSE YOUR PORSCHE</h1>
            </HomePageContainer>
        </>
    )
}