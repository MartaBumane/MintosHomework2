import { fireEvent, render, screen } from '@testing-library/react';
import { ListOfSelected } from './ListOfSelected';
import { List } from './MainContainer';

let testList: List = {
    eur: true,
    pln: false,
    gel: false,
    dkk: false,
    czk: false,
    gbp: false,
    sek: false,
    usd: false,
    rub: false,
}

const testSelectCallback = () => ({});

test('renders ListOfSelected', () => {
    render(<ListOfSelected
        selectedCurrencyList={testList}
        setSelectedCurrencyList={testSelectCallback}
    />);
    const listOfSelected = screen.getByTestId("listOfSelected");
    expect(listOfSelected).toBeInTheDocument();
});

test('is should have selected item', () => {
    render(<ListOfSelected
        selectedCurrencyList={testList}
        setSelectedCurrencyList={testSelectCallback}
    />);
    const selectedItem = screen.getByTestId("selectedItem");
    expect(selectedItem).toBeInTheDocument();
});

test('is should have eur text on selected item', () => {
    render(<ListOfSelected
        selectedCurrencyList={testList}
        setSelectedCurrencyList={testSelectCallback}
    />);
    const selectedCurrencyCode = screen.getByTestId("selectedCurrencyCode");
    expect(selectedCurrencyCode).toBeInTheDocument();
    expect(selectedCurrencyCode).toContainHTML("eur");
});

test('is should have close button and testSelectCallback have to be called after click', () => {
    render(<ListOfSelected
        selectedCurrencyList={testList}
        setSelectedCurrencyList={testSelectCallback}
    />);
    const closeButton = screen.getByTestId("closeButton");
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(testSelectCallback).toHaveBeenCalled();
});