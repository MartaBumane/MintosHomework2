import React, { useCallback } from "react";

import { ListOfCurrencies } from "./ListOfCurrencies";
import { ListOfSelected } from "./ListOfSelected";

import './MainContainer.css';

export type Currency =
    | "eur"
    | "pln" 
    | "gel" 
    | "dkk"
    | "czk"
    | "gbp"
    | "sek"
    | "usd"
    | "rub";

export type List = Record<Currency, boolean>;

export interface ListItemProps {
    selectedCurrencyList: List;
    setSelectedCurrencyList: (i: Currency, value: boolean) => void;
}

export const MainContainer: React.FC = () => {
    const [selectedCurrencyList, setSelectedCurrencyList] = React.useState({
        eur: false,
        pln: false,
        gel: false,
        dkk: false,
        czk: false,
        gbp: false,
        sek: false,
        usd: false,
        rub: false,
    })

    const handleClick = useCallback((i: Currency, value: boolean): void => {
        setSelectedCurrencyList({
            ...selectedCurrencyList,
            [i]: value,
        });
    },[selectedCurrencyList, setSelectedCurrencyList]);

    return (
        <div className="mainContainer" data-testid="mainContainer">
            <ListOfSelected 
                selectedCurrencyList={selectedCurrencyList}
                setSelectedCurrencyList={handleClick}
            />
            <ListOfCurrencies
                selectedCurrencyList={selectedCurrencyList}
                setSelectedCurrencyList={handleClick}
            />
        </div>
    )  
}
