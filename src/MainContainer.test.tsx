import { render, screen } from '@testing-library/react';
import { MainContainer } from './MainContainer';

test('renders Main container', () => {
    render(<MainContainer />);
    const mainContainer = screen.getByTestId("mainContainer");
    expect(mainContainer).toBeInTheDocument();
});