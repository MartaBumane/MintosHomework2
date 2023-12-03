import React, { useCallback } from "react";

import { Currency, ListItemProps } from "./MainContainer";

import "./ListOfCurrencies.css";

export const ListOfCurrencies: React.FC<ListItemProps> = ({
    selectedCurrencyList,
    setSelectedCurrencyList,
}) => {
    const isSelected = useCallback((i: Currency): boolean => {
        return selectedCurrencyList[i];
    },[selectedCurrencyList]);

    const handleSelect = useCallback((i: Currency): void => {
        setSelectedCurrencyList(i, !isSelected(i));
    },[setSelectedCurrencyList, isSelected]);

    const getFullList = useCallback((): Currency[] => {
        return Object.keys(selectedCurrencyList) as Currency[];
    },[selectedCurrencyList])

    return (
        <div className={"gridContainer"}>
            {getFullList().map((i) => {
                return (
                    <div 
                        className={isSelected(i) ? "gridItem selected" : "gridItem"}
                        key={i}
                        onClick={() => handleSelect(i)}
                    >
                        <input
                            type="checkbox"
                            className={isSelected(i) ? "checkbox selected" : "checkbox"}
                            onSubmit={() => handleSelect(i)}
                            checked={isSelected(i)}
                        />
                        <span className="currencyCode">{i.toUpperCase()}</span>
                    </div>
                );
            })}
        </div>
    );
}
