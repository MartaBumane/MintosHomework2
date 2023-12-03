import React, { useCallback } from "react";

import { Currency, ListItemProps } from "./MainContainer";

import "./ListOfSelected.css";

export const ListOfSelected: React.FC<ListItemProps> = ({
    selectedCurrencyList,
    setSelectedCurrencyList,
}) => {

    const handleClose = useCallback((i: Currency): void => {
        setSelectedCurrencyList(i, false);
    },[setSelectedCurrencyList]);

    const getFiltertedList = useCallback((): Currency[] => (
        Object.keys(selectedCurrencyList).filter(key=>selectedCurrencyList[key as Currency] === true) as Currency[]
    ),[selectedCurrencyList]);

    return (
        <div className="listOfSelected" data-testid="listOfSelected">
            <div>
                <div className="gridContainer">
                    {getFiltertedList().map((i) => {
                        return (
                            <div>
                                <div className="selectedItem" key={i} data-testid="selectedItem">
                                    <div className="selectedCurrencyCode" data-testid="selectedCurrencyCode">{i}</div>
                                    <div className="badge" data-testid="closeButton" onClick={() => handleClose(i)}>
                                        <span className="closeButton">x</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )  
}
