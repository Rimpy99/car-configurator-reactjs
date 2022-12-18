import React, {useState, Dispatch, SetStateAction} from 'react';
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
    options: OptionObject,
    setOptions: Dispatch<SetStateAction<OptionObject>>,
}

type ColorBoxProps = {
    color: string,
}

type inputStatusType = {
    rims: boolean,
    lights: boolean,
    nightVision: boolean,
    premium: boolean,
}

type inputProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    status: boolean,
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

export const Options = ({colors, setColor, setRims, options, setOptions}: Props) => {

    const [inputStatus, setInputStatus] = useState<inputStatusType>({
        rims: false,
        lights: false,
        nightVision: false,
        premium: false,
    });



    return(
        <>
            <Heading>OPTIONS</Heading>
            <ColorContainer>
                {colors.map((color) => {
                    return <ColorBox color={color} onClick={() => setColor(color)}/>   
                })}
            </ColorContainer>
            <div>
                <Option>
                    <Input 
                        status={inputStatus.rims}
                        onChange={() => { 
                            setRims(currentStatus => !currentStatus); 
                            setInputStatus(inputStatus => ({...inputStatus, rims: !inputStatus.rims}));
                        }}
                    />
                    <OptionsParagraph>Dark themed rims</OptionsParagraph>
                </Option>
                <Option>
                    <Input 
                        status={inputStatus.lights}
                        onChange={() => {
                            setOptions(options => ({...options, dynamicLightsSystemPlus: !options.dynamicLightsSystemPlus}) );
                            setInputStatus(inputStatus => ({...inputStatus, lights: !inputStatus.rims}));
                        }}
                    />
                    <OptionsParagraph>Porsche Dynamic Light System Plus</OptionsParagraph>
                </Option>
                <Option>
                    <Input 
                        status={inputStatus.nightVision}
                        onChange={() => {
                            setOptions(options => ({...options, NightVisionAssist: !options.NightVisionAssist}) );
                            setInputStatus(inputStatus => ({...inputStatus, nightVision: !inputStatus.rims}));
                        }}
                    />
                    <OptionsParagraph>Night Vision Assist</OptionsParagraph>
                </Option>
                <Option>
                    <Input 
                        status={inputStatus.premium}
                        onChange={() => {
                            setOptions(options => ({...options, PremiumPackage: !options.PremiumPackage}) );
                            setInputStatus(inputStatus => ({...inputStatus, premium: !inputStatus.rims}));
                        }}
                    />
                    <OptionsParagraph>Premium Package</OptionsParagraph>
                </Option>
            </div>
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

const Option = styled.div`
    display:  flex;
    justify-content: flex-start;
    align-items: center;
    // width: 500px;
    border-top: 2px solid #dedede;
    padding: 15px 0;

    &:nth-child(4){
        border-bottom: 2px solid #dedede;
    }
`;


const Input = styled.input.attrs({ type: 'checkbox' })<inputProps>`
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 2px solid black;
    accent-color: red;
`

const OptionsParagraph = styled.p`
    padding-left: 20px;
    font-size: 25px;
`