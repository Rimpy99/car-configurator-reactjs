import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa";

type Props = {
    images: string[],
}

type windowWidth = {
    innerWidth: number,
}

type styledComponentsProps = {
    size: windowWidth,
}

// const slideSize = 2000;

export const ImageSlider = ({images}: Props) => {

    const setSlideWidthOnFirstRender = () => {
        const windowSize = getWindowSize();
        windowSize.innerWidth = windowSize.innerWidth * 0.6;
        return windowSize;
    }

    const [slide0, setSlide0] = useState<number>(0)
    const [slide1, setSlide1] = useState<number>(0)
    const [slide2, setSlide2] = useState<number>(0)
    const [slide3, setSlide3] = useState<number>(0)
    const [slide4, setSlide4] = useState<number>(0)
    const [visibleSlide, setVisibleSlide] = useState<number>(1);
    const [slideSize, setSlideSize] = useState<windowWidth | any>(setSlideWidthOnFirstRender());

    useEffect(() => {

        const changeSlideSize = () => {
            const windowSize = getWindowSize();
            if(windowSize.innerWidth > 540){
                windowSize.innerWidth = windowSize.innerWidth * 0.6;
            }
            setSlideSize(windowSize);
            console.log(getWindowSize());
        }

        window.addEventListener('resize', changeSlideSize);

        return () => {
            window.removeEventListener('resize', changeSlideSize);
        }
    }, [])

    const goRight = () => {
        setSlide0(slide0 - slideSize.innerWidth);
        setSlide1(slide1 - slideSize.innerWidth);
        setSlide2(slide2 - slideSize.innerWidth);
        setSlide3(slide3 - slideSize.innerWidth);
        setSlide4(slide4 - slideSize.innerWidth);

        if(visibleSlide === 3){
            setTimeout(() => {
                setVisibleSlide(current => current + 1);
            }, 488);
        }else{
            setVisibleSlide(current => current + 1);
        }
    }

    const goLeft = () => {
        setSlide0(slide0 + slideSize.innerWidth);
        setSlide1(slide1 + slideSize.innerWidth);
        setSlide2(slide2 + slideSize.innerWidth);
        setSlide3(slide3 + slideSize.innerWidth);
        setSlide4(slide4 + slideSize.innerWidth);

        if(visibleSlide === 1){
            setTimeout(() => {
                setVisibleSlide(current => current - 1);
            }, 488);
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
            }, 5);

        }else if(visibleSlide === 0){
            setSlide0(-(2*slideSize.innerWidth));
            setSlide1(-(2*slideSize.innerWidth));
            setSlide2(-(2*slideSize.innerWidth));
            setSlide3(-(2*slideSize.innerWidth));
            setSlide4(-(2*slideSize.innerWidth));

            setTimeout(() => {
                setVisibleSlide(3);
            }, 5);

        }
    }, [visibleSlide])

    return(
        <div> 
            <SliderContainer size={slideSize}>
                <SliderContent size={slideSize}>
                    <SlideImg src={images[2]} alt={images[2]} style={{ transform: `translateX(${slide0}px)`, transition: (visibleSlide === 4 || visibleSlide === 0) ? 'all 0s ease-in-out' : 'all .5s ease-in-out'}}/>
                    <SlideImg src={images[0]} alt={images[0]} data-testid='slide1' style={{ transform: `translateX(${slide1}px)`, transition: (visibleSlide === 4 || visibleSlide === 0) ? 'all 0s ease-in-out' : 'all .5s ease-in-out'}}/>
                    <SlideImg src={images[1]} alt={images[1]} data-testid='slide2' style={{ transform: `translateX(${slide2}px)`, transition: (visibleSlide === 4 || visibleSlide === 0) ? 'all 0s ease-in-out' : 'all .5s ease-in-out'}}/>
                    <SlideImg src={images[2]} alt={images[2]} data-testid='slide3' style={{ transform: `translateX(${slide3}px)`, transition: (visibleSlide === 4 || visibleSlide === 0) ? 'all 0s ease-in-out' : 'all .5s ease-in-out'}}/>
                    <SlideImg src={images[0]} alt={images[0]} style={{ transform: `translateX(${slide4}px)`, transition: (visibleSlide === 4 || visibleSlide === 0) ? 'all 0s ease-in-out' : 'all .5s ease-in-out'}}/>
                </SliderContent>
                <SliderLeftButton data-testid='slider-arrow-left' onClick={() => goLeft()}><FaChevronLeft size={30} color={slideSize.innerWidth > 540 ? 'white' : 'red'}/></SliderLeftButton>
                <SliderRightButton data-testid='slider-arrow-right' onClick={() => goRight()}><FaChevronRight size={30} color={slideSize.innerWidth > 540 ? 'white' : 'red'}/></SliderRightButton>
            </SliderContainer>
        </div>
    );
}

const getWindowSize = () => {
    const {innerWidth} = window;
    return {innerWidth};
}

const SliderLeftButton = styled.button`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: transparent;
    padding: 20px;
    border: none;
    cursor: pointer;
`;

const SliderRightButton = styled.button`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: transparent;
    padding: 20px;
    border: none;
    cursor: pointer;
`;

const SlideImg = styled.img`
    min-width: 100%;
    // transition: all .3s ease-in-out;
`;

const SliderContent = styled.div<styledComponentsProps>`
    display: flex;
    flex-wrap: nowrap;
    ${props => `
        width: ${props.size.innerWidth}px;
        transform: translateX(-${props.size.innerWidth}px);
    `}
    background-color: right;
    // overflow: hidden;
`;

const SliderContainer = styled.div<styledComponentsProps>`
    display: flex;
    flex-wrap: nowrap;
    background-color: right;
    overflow: hidden;
    position: relative;
    ${props => `
        width: ${props.size.innerWidth}px;
    `}
`

