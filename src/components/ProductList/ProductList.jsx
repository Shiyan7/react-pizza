import React from "react";
import { Product } from "../Product/Product";

export const ProductList = ({productsData}) => {

    const elements = productsData.map(prod => {
        return (
            <li className="product__item" key={prod.id}>
                <Product prod={prod} key={prod.id} />
            </li>
        )
    });

    if(!productsData.length) return <h2 className="error-404">Не найдено!</h2>

    return (
        <ul className="products__list list-reset">
            {elements}
        </ul>
    )

}