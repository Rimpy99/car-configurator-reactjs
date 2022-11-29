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
    const [visibleSlide, setVisibleSlide] = useState<number>(1);

    useEffect(() => {
        console.log(visibleSlide);
    }, [visibleSlide])

    const goRight = () => {
        setSlide0(slide0 - 500);
        setSlide1(slide1 - 500);
        setSlide2(slide2 - 500);
        setSlide3(slide3 - 500);
        setSlide4(slide4 - 500);

        if(visibleSlide === 3){
            setTimeout(() => {
                setVisibleSlide(current => current + 1);
            }, 300);
        }else{
            setVisibleSlide(current => current + 1);
        }


    }

    const goLeft = () => {
        setSlide0(slide0 + 500);
        setSlide1(slide1 + 500);
        setSlide2(slide2 + 500);
        setSlide3(slide3 + 500);
        setSlide4(slide4 + 500);

        if(visibleSlide === 1){
            setTimeout(() => {
                setVisibleSlide(current => current - 1);
            }, 300);
        }else{
            setVisibleSlide(current => current - 1);
        }


    }

    useEffect(() => {
        // visibleSlide === 4 && setTimeout(() => {
        //     setSlide0(0);
        //     setSlide1(0);
        //     setSlide2(0);
        //     setSlide3(0);
        //     setSlide4(0);
        //     setVisibleSlide(1);
        //     console.log(visibleSlide);
        // }, 500)
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
            setSlide0(-1000);
            setSlide1(-1000);
            setSlide2(-1000);
            setSlide3(-1000);
            setSlide4(-1000);

            setTimeout(() => {
                setVisibleSlide(3);
            }, 50);

        }
    }, [visibleSlide])

    // useEffect(() => {
    //     visibleSlide === 0 && setTimeout(() => {
    //         setSlide0(-1000);
    //         setSlide1(-1000);
    //         setSlide2(-1000);
    //         setSlide3(-1000);
    //         setSlide4(-1000);
    //         setVisibleSlide(3);
    //         console.log(visibleSlide);
    //     }, 500)
    // }, [visibleSlide])


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
    width: 500px;
    transform: translateX(-500px);
    background-color: right;
    // overflow: hidden;
`;

const SliderContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    background-color: right;
    overflow: hidden;
    width: 500px;
`

