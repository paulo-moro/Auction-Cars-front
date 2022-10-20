import { render, screen } from '@testing-library/react';
import { ButtonAuction } from '.';

describe('Button auction component', () => {

    render(<ButtonAuction />)
    
    test("Name on button", () => {
        expect(screen.getByText('Acessar página do leilão')).toBeInTheDocument();
    })
    
})