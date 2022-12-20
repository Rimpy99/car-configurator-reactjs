import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ImageSlider } from '../ImageSlider/ImageSlider';

const images = ['img1', 'img2', 'img3'];

describe('Testing ImageSlider component', () => {
    test('should render sliders with proper images', () => {
        render(<ImageSlider images={images}/>);

        const img1 = screen.getByTestId('slide1');
        const img2 = screen.getByTestId('slide2');
        const img3 = screen.getByTestId('slide3');

        expect(img1).toHaveAttribute('src', 'img1');
        expect(img2).toHaveAttribute('src', 'img2');
        expect(img3).toHaveAttribute('src', 'img3');
    })

    test('should move slider to left after clicking left arrow', () => {
        render(<ImageSlider images={images}/>);

        fireEvent.click(screen.getByTestId('slider-arrow-left'));
        
        const slide1 = screen.getByTestId('slide1');
        const {innerWidth} = window;
        const currentSlideWidth = innerWidth * 0.6;

        expect(slide1.style.transform).toBe(`translateX(${currentSlideWidth}px)`);
    })

    test('should move slider to right after clicking right arrow', () => {
        render(<ImageSlider images={images}/>);

        fireEvent.click(screen.getByTestId('slider-arrow-right'));
        
        const slide1 = screen.getByTestId('slide1');
        const {innerWidth} = window;
        const currentSlideWidth = innerWidth * 0.6;

        expect(slide1.style.transform).toBe(`translateX(-${currentSlideWidth}px)`);
    })
})