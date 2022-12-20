import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../Header/Header';

type MockHeaderProps = {
    carModel: string,
}

const MockHeader = ({carModel}: MockHeaderProps) => {
    return(
        <BrowserRouter>
            <Header carModel={carModel}/>
        </BrowserRouter>
    )
}

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));

describe('Testing Header component', () => {
    it('h1 tag should contain text from props', () => {
        render(<MockHeader carModel={'MACAN'}/>);
        expect(screen.getByText(/MACAN CONFIGURATOR/i)).toBeInTheDocument();
    });

    it('Button to go back should be in the document', () => {
        render(<MockHeader carModel={'MACAN'}/>);
        expect(screen.getByTestId(/arrow-back/i)).toBeInTheDocument();
    })

    it('should navigate to home page', () => {
        render(<MockHeader carModel={'MACAN'}/>);
        const ArrowBackIcon = screen.getByTestId(/arrow-back/i);
        userEvent.click(ArrowBackIcon);
        expect(mockNavigate).toHaveBeenNthCalledWith(1, '/');
    })
})