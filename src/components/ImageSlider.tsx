import React, { useEffect, useState } from 'react';
import styled from "styled-components";

type Props = {
    images: string[],
}

export const ImageSlider = ({images}: Props) => {

    const [slide0, setSlide0] = useState<number>(0)
    const [slide1, setSlide1] = useState<number>(0)
    const [slide2, setSlide2] = useState<number>(0)
    const [slide3, setSlide3] = useState<number>(0)
    const [slide4, setSlide4] = useState<number>(0)

    const goRight = () => {
        setSlide0(slide0 - 500);
        setSlide1(slide1 - 500);
        setSlide2(slide2 - 500);
        setSlide3(slide3 - 500);
        setSlide4(slide4 - 500);
        console.log(slide4)
    }

    useEffect(() => {
        slide4 === -1500 && setTimeout(() => {
            setSlide0(0);
            setSlide1(0);
            setSlide2(0);
            setSlide3(0);
            setSlide4(0);
        }, 500)
    }, [slide4])

    const goLeft = () => {

        if(slide3 !== 500){
            setSlide0(slide0 + 500);
            setSlide1(slide1 + 500);
            setSlide2(slide2 + 500);
            setSlide3(slide3 + 500);
            setSlide4(slide4 + 500);
        }else{
            setSlide0(-1000);
            setSlide1(-1000);
            setSlide2(-1000);
            setSlide3(-1000);
            setSlide4(-1000);
        }
    }

    return(
        <div> 
            <SliderContainer>
                <SliderContent>
                    <SlideImg src={images[2]} alt="slide3" style={{ transform: `translateX(${slide0}px)`, transition: slide4 !== -0 ? 'all .3s ease-in-out' : 'all 0s ease-in-out'}}/>
                    <SlideImg src={images[0]} alt="slide1" style={{ transform: `translateX(${slide1}px)`, transition: slide4 !== -0 ? 'all .3s ease-in-out' : 'all 0s ease-in-out'}}/>
                    <SlideImg src={images[1]} alt="slide2" style={{ transform: `translateX(${slide2}px)`, transition: slide4 !== -0 ? 'all .3s ease-in-out' : 'all 0s ease-in-out'}}/>
                    <SlideImg src={images[2]} alt="slide3" style={{ transform: `translateX(${slide3}px)`, transition: slide4 !== -0 ? 'all .3s ease-in-out' : 'all 0s ease-in-out'}}/>
                    <SlideImg src={images[0]} alt="slide1" style={{ transform: `translateX(${slide4}px)`, transition: slide4 !== -0 ? 'all .3s ease-in-out' : 'all 0s ease-in-out'}}/>
                </SliderContent>
            </SliderContainer>
            <button onClick={() => goLeft()}>left</button>
            <button onClick={() => goRight()}>right</button>
        </div>
    );
}

const SlideImg = styled.img`
    min-width: 100%;
    // transition: all .3s ease-in-out;
`;

const SliderContent = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 500px;
    transform: translateX(-500px);
    background-color: right;
    // overflow: hidden;
`;

const SliderContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    background-color: right;
    // overflow: hidden;
    width: 500px;
`

