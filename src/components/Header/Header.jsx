import React from "react";
import logoUrl from "../../assets/img/logo.svg"
import { NavLink } from 'react-router-dom';
import { Cart } from "../Cart/Cart";

export const Header = ({value, quantity}) => {
    return (
        <header className="header">
            <NavLink className="nav-link logo" to="/" exact>
                <img className="logo__image" src={logoUrl} alt="React Pizza" />
                <h1 className="logo__text">
                    <span className="logo__title">REACT PIZZA</span>
                    <span className="logo__desc">самая вкусная пицца во вселенной</span>
                </h1>
            </NavLink>

            <Cart value={value} quantity={quantity} />
        </header>
    )
}