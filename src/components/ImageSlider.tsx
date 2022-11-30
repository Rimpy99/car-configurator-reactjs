import React, { useEffect, useState } from 'react';
import styled from "styled-components";

type Props = {
    images: string[],
}

const slideSize = 2000;

export const ImageSlider = ({images}: Props) => {

    const [slide0, setSlide0] = useState<number>(0)
    const [slide1, setSlide1] = useState<number>(0)
    const [slide2, setSlide2] = useState<number>(0)
    const [slide3, setSlide3] = useState<number>(0)
    const [slide4, setSlide4] = useState<number>(0)
    const [visibleSlide, setVisibleSlide] = useState<number>(1);

    useEffect(() => {
        console.log(visibleSlide);
    }, [visibleSlide])

    const goRight = () => {
        setSlide0(slide0 - slideSize);
        setSlide1(slide1 - slideSize);
        setSlide2(slide2 - slideSize);
        setSlide3(slide3 - slideSize);
        setSlide4(slide4 - slideSize);

        if(visibleSlide === 3){
            setTimeout(() => {
                setVisibleSlide(current => current + 1);
            }, 300);
        }else{
            setVisibleSlide(current => current + 1);
        }
    }

    const goLeft = () => {
        setSlide0(slide0 + slideSize);
        setSlide1(slide1 + slideSize);
        setSlide2(slide2 + slideSize);
        setSlide3(slide3 + slideSize);
        setSlide4(slide4 + slideSize);

        if(visibleSlide === 1){
            setTimeout(() => {
                setVisibleSlide(current => current - 1);
            }, 300);
        }else{
            setVisibleSlide(current => current - 1);
        }
    }

    useEffect(() => {
        if(visibleSlide === 4){
            setSlide0(0);
            setSlide1(0);
            setSlide2(0);
            setSlide3(0);
            setSlide4(0);

            setTimeout(() => {
                setVisibleSlide(1);
            }, 50);

        }else if(visibleSlide === 0){
            setSlide0(-(2*slideSize));
            setSlide1(-(2*slideSize));
            setSlide2(-(2*slideSize));
            setSlide3(-(2*slideSize));
            setSlide4(-(2*slideSize));

            setTimeout(() => {
                setVisibleSlide(3);
            }, 50);

        }
    }, [visibleSlide])

    return(
        <div> 
            <SliderContainer>
                <SliderContent>
                    <SlideImg src={images[2]} alt="slide3" style={{ transform: `translateX(${slide0}px)`, transition: (visibleSlide === 4 || visibleSlide === 0) ? 'all 0s ease-in-out' : 'all .3s ease-in-out'}}/>
                    <SlideImg src={images[0]} alt="slide1" style={{ transform: `translateX(${slide1}px)`, transition: (visibleSlide === 4 || visibleSlide === 0) ? 'all 0s ease-in-out' : 'all .3s ease-in-out'}}/>
                    <SlideImg src={images[1]} alt="slide2" style={{ transform: `translateX(${slide2}px)`, transition: (visibleSlide === 4 || visibleSlide === 0) ? 'all 0s ease-in-out' : 'all .3s ease-in-out'}}/>
                    <SlideImg src={images[2]} alt="slide3" style={{ transform: `translateX(${slide3}px)`, transition: (visibleSlide === 4 || visibleSlide === 0) ? 'all 0s ease-in-out' : 'all .3s ease-in-out'}}/>
                    <SlideImg src={images[0]} alt="slide1" style={{ transform: `translateX(${slide4}px)`, transition: (visibleSlide === 4 || visibleSlide === 0) ? 'all 0s ease-in-out' : 'all .3s ease-in-out'}}/>
                </SliderContent>
            </SliderContainer>
            <button onClick={() => goLeft()}>left</button>
            <button onClick={() => goRight()}>right</button>
        </div>
    );
}

// (slide4 !== 0 || slide0 !== -1000) ? 'all .3s ease-in-out' : 'all 0s ease-in-out'}

const SlideImg = styled.img`
    min-width: 100%;
    // transition: all .3s ease-in-out;
`;

const SliderContent = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: ${slideSize}px;
    transform: translateX(-${slideSize}px);
    background-color: right;
    // overflow: hidden;
`;

const SliderContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    background-color: right;
    overflow: hidden;
    width: ${slideSize}px;
`

