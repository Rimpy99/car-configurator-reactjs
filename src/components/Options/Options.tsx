import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';

type Props = {
    colors: string[],
    setColor: Dispatch<SetStateAction<string>>,
    setRims: Dispatch<SetStateAction<boolean>>,
}

type ColorBoxProps = {
    color: string,
}

const chooseColor = (passedColor: string | any) => {
    switch(passedColor){
        case 'white':
            return '#fff';
        case 'black':
            return '#000';
        case 'red': 
            return '#CC0033';
        case 'blue':
            return '#10B7E1';
    }
}

export const Options = ({colors, setColor, setRims}: Props) => {

    return(
        <>
            <h1>OPTIONS</h1>
            {colors.map((color) => {
                return <ColorBox color={color} onClick={() => setColor(color)}/>   
            })}
        </>
    )
};

const ColorBox = styled.div<ColorBoxProps>`
    width: 200px;
    height: 200px;
    background-color: ${({color}) => chooseColor(color)};
    cursor: pointer;
`