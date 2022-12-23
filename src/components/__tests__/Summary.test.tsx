import { render, screen } from '@testing-library/react';
import React from 'react';
import { Summary } from '../Summary/Summary';

describe('Testing Summary component', () => {
    it('should render row with proper car model', () => {
        render(
            <Summary 
                car={'macan'}
                color={'white'}
                rims={false}
                options={[
                    {
                        optionName: 'Dynamic lights system plus',
                        status: false,
                    },
                    {
                        optionName: 'Night vision assist',
                        status: false,
                    },
                    {
                        optionName: 'Premium package',
                        status: false,
                    }
                ]}
            />
        );

        expect(screen.getByText(/porsche model macan/i)).toBeInTheDocument();
        const priceCells = screen.getAllByText('$57,500');

        priceCells.map(e => {
            expect(e).toBeInTheDocument();
        })
    })

    it('should show prices if options are selected', () => {
        render(
            <Summary 
                car={'macan'}
                color={'white'}
                rims={false}
                options={[
                    {
                        optionName: 'Dynamic lights system plus',
                        status: true,
                    },
                    {
                        optionName: 'Night vision assist',
                        status: true,
                    },
                    {
                        optionName: 'Premium package',
                        status: true,
                    }
                ]}
            />
        );

        expect(screen.getByText('$720')).toBeInTheDocument();
        expect(screen.getByText('$1,050')).toBeInTheDocument();
        expect(screen.getByText('$4,200')).toBeInTheDocument();
    });

    it('should render proper sum', () => {
        render(
            <Summary 
                car={'macan'}
                color={'blue'}
                rims={true}
                options={[
                    {
                        optionName: 'Dynamic lights system plus',
                        status: true,
                    },
                    {
                        optionName: 'Night vision assist',
                        status: true,
                    },
                    {
                        optionName: 'Premium package',
                        status: true,
                    }
                ]}
            />
        );

        expect(screen.getByText('$67,020')).toBeInTheDocument();
    })
})