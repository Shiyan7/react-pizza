import React from "react";
import { Header } from "../components/Header/Header";

export const Cart = () => {
    return (
        <>
            <Header value={0} quantity={0} />
            <h2>Корзина пустая</h2>
            <p>Вероятней всего, вы не заказывали ещё пиццу.
Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
        </>
    )
}