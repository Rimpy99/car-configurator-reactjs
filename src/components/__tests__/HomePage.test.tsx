import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { HomePage } from '../../pages/HomePage/HomePage';
import { CarConfigurator } from '../../pages/CarConfigurator/CarConfigurator';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const MockHomePage = () => {
    return(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    )
}

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));

describe('Testing HomePage component', () => {
    
    it('should render header for HomePage', () => {
        render(<MockHomePage />);
        expect(screen.getByRole('heading', { name: /CHOOSE YOUR PORSCHE/i })).toBeInTheDocument();
    });

    it('should be 3 cards in HomePage', () => {
        render(<MockHomePage />);
        expect(screen.getAllByRole('img').length).toBe(3);
        expect(screen.getAllByRole('heading', {level: 2}).length).toBe(3);
    })

    it('should navigate to different url', () => {
        render(<MockHomePage />);
        const LinkElement = screen.getByText(/Panamera/i);
        userEvent.click(LinkElement);

        expect(mockNavigate).toHaveBeenNthCalledWith(1, 'porschePanamera')
    })

})
