import React from "react";

export const Filtersbtn = ({btn, onClick, filterProducts}) => {

    const isActive = filterProducts === btn.label;

    return (
        <button className={isActive ? 'btn-reset filters__btn filters__btn--active' : 'btn-reset filters__btn'} onClick={() => onClick(btn.label)}>{btn.name}</button>
    )
}