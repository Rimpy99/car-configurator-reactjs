import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';


type OptionObject = {
    dynamicLightsSystemPlus: boolean,
    NightVisionAssist: boolean,
    PremiumPackage: boolean,
}

type Props = {
    colors: string[],
    setColor: Dispatch<SetStateAction<string>>,
    setRims: Dispatch<SetStateAction<boolean>>,
    rims: boolean,
    options: OptionObject,
    setOptions: Dispatch<SetStateAction<OptionObject>>,
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
        case 'darkblue':
            return '#00194B';
    }
}

export const Options = ({colors, setColor, setRims, rims, options, setOptions}: Props) => {

    return(
        <>
            <Heading>OPTIONS</Heading>
            <ColorContainer>
                {colors.map((color) => {
                    return <ColorBox color={color} onClick={() => setColor(color)}/>   
                })}
            </ColorContainer>
            <OptionsContainer>
                <Option>
                    <input type="checkbox" onChange={() => setRims(currentStatus => !currentStatus)}/>
                    <OptionsParagraph>Dark themed rims</OptionsParagraph>
                </Option>
                <Option>
                    <input type="checkbox" onChange={() => setOptions(options => ({...options, dynamicLightsSystemPlus: !options.dynamicLightsSystemPlus}) )}/>
                    <OptionsParagraph>Porsche Dynamic Light System Plus</OptionsParagraph>
                </Option>
                <Option>
                    <input type="checkbox" onChange={() => setOptions(options => ({...options, NightVisionAssist: !options.NightVisionAssist}) )}/>
                    <OptionsParagraph>Night Vision Assist</OptionsParagraph>
                </Option>
                <Option>
                    <input type="checkbox" onChange={() => setOptions(options => ({...options, PremiumPackage: !options.PremiumPackage}) )}/>
                    <OptionsParagraph>Premium Package</OptionsParagraph>
                </Option>
            </OptionsContainer>
        </>
    )
};

const Heading = styled.h1`
    padding: 40px 0 0;
    border-bottom: 2px solid #dedede;
    letter-spacing: 3px;
`

const ColorContainer = styled.div`
    display: flex;
    padding-bottom: 30px;
`

const ColorBox = styled.div<ColorBoxProps>`
    width: 70px;
    height: 70px;
    background-color: ${({color}) => chooseColor(color)};
    cursor: pointer;
    margin: 15px;
    box-shadow: 0px 0px 37px -4px rgba(182, 182, 182, 1);
    transition: box-shadow .2s ease-in-out;

    &:hover{
        box-shadow: 0px 0px 37px -4px rgba(91, 91, 91, 1);
    }
` 

const OptionsContainer = styled.div`

`

const Option = styled.div`
    display:  flex;
    justify-content: flex-start;
    // width: 500px;
    border-top: 2px solid #dedede;
    padding: 15px 0;

    &:nth-child(4){
        border-bottom: 2px solid #dedede;
    }
`

const OptionsParagraph = styled.p`
    padding-left: 20px;
    font-size: 25px;
`