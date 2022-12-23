import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Options } from '../Options/Options';
import { ImageSlider } from '../ImageSlider/ImageSlider';

const colorProps = [ 'blue', 'red' ];

describe('Testing Options component', () => {
    it('should render divs with passed colors', () => {
        render(
            <Options 
                colors={colorProps}
                setColor={() => {}} 
                setRims={() => {}}
                options={[
                    {
                        optionName: 'mock text',
                        status: false,
                    },
                ]}
                setOptions={() => {}}
            />
        );
        
        colorProps.forEach(color => {
            expect(screen.getByTestId(`colorDiv-${color}`)).toBeInTheDocument();
        })
    });

    it('should change slider photos after clicking color block', () => {
        render(
            <Options 
                colors={colorProps}
                setColor={() => {}} 
                setRims={() => {}}
                options={
                    [
                        {
                            optionName: 'mock text',
                            status: false,
                        },
                    ]
                }
                setOptions={() => {}}
            />
        );

        const colorBlock = screen.getByTestId(`colorDiv-${colorProps[0]}`);
        fireEvent.click(colorBlock);

        render(<ImageSlider images={[]} chosenColor={`${colorProps[0]}`}/>);
        expect(screen.getByTestId(`slider-${colorProps[0]}`)).toBeInTheDocument();
    });

    it('should render proper options', () => {
        render(
            <Options 
                colors={colorProps}
                setColor={() => {}} 
                setRims={() => {}}
                options={
                    [
                        {
                            optionName: 'mock text',
                            status: false,
                        },
                    ]
                }
                setOptions={() => {}}
            />
        );

        expect(screen.getByText('mock text')).toBeInTheDocument();
    });

    it('should render options with choosing rims', () => {
        render(
            <Options 
                colors={colorProps}
                setColor={() => {}} 
                setRims={() => {}}
                options={
                    [
                        {
                            optionName: 'mock text',
                            status: false,
                        },
                    ]
                }
                setOptions={() => {}}
            />
        );

        expect(screen.getByText(/dark themed rims/i)).toBeInTheDocument();
    })
})