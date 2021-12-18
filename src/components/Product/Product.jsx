import React, { useState } from "react";
import url from "../../assets/img/product-1.jpg";

export const Product = ({prod}) => {

    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];
    const {title, price} = prod;

    let [numbers, setNumbers] = useState(0);

    function addToCart () {
        setNumbers(numbers + 1);
    }

    return (
        <article className="product">
            <img className="product__image" src={url} alt="" />
            <h3 className="product__title">{title}</h3>
            <div className="product-switcher">
                <ul className="product-switcher__list list-reset">
                    {availableTypes.map((type, idx) => {
                        return <li className="product-switcher__item" key={idx} >{type}</li>
                    })}
                </ul>
                <ul className="product-switcher__list list-reset">
                    {availableSizes.map((type, idx) => {
                        return <li className="product-switcher__item" key={idx}>{type} см.</li>
                    })}
                </ul>
            </div>
            <div className="product__bottom">
                <span className="product__price">от {price} ₽</span>
                <button className="btn-reset btn product__buy" onClick={addToCart}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="inherit"/>
                    </svg>
                    добавить
                    {numbers > 0 && <i className="btn__count">{numbers}</i>}
                </button>
            </div>
        </article>
    )
}