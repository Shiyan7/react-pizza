import React, { useState } from "react";
import { Filters } from "../components/Filters/Filters";
import { Header } from "../components/Header/Header";
import { ProductList } from "../components/ProductList/ProductList";
import { Sort } from "../components/Sort/Sort";

export const Home = () => {

    const [productsFilter, setProductsFilter] = useState('all');

    const productsData = [
        {title: 'Чизбургер-пицца', price: 395, id: 1, sharp: true},
        {title: 'Сырная', price: 450, id: 2, grill: true},
        {title: 'Креветки по-азиатски', price: 290, id: 3, meat: true},
        {title: 'Сырный цыпленок', price: 385, id: 4, closed: true},
        {title: 'Чизбургер-пицца', price: 395, id: 5, meat: true},
        {title: 'Сырная', price: 450, imgUrl: 'product-2.jpg', id: 6, grill: true},
        {title: 'Креветки по-азиатски', price: 290, imgUrl: 'product-3.jpg', id: 7, closed: true},
        {title: 'Сырный цыпленок', price: 385, id: 8, closed: true},
    ]

    function filter (items, filter = '') {
        switch(filter) {
            case 'all':
                return items;
            case 'meat':
                return items.filter(item => item.meat);
            case 'vegetarian':
                return items.filter(item => item.vegetarian);
            case 'grill':
                return items.filter(item => item.grill);
            case 'sharp':
                return items.filter(item => item.sharp);
            case 'closed':
                return items.filter(item => item.closed);
            default:
                return items;
        }
    }

    function filterProducts (label) {
        setProductsFilter(label)
    }

    return (
        <>
            <Header value={0} quantity={0} />
            <div className="toolbar">
                <Filters onToggle={filterProducts} filterProducts={productsFilter} />
                <Sort />
            </div>
            <section className="products">
                <h2 className="g-title">Все пиццы</h2>
                <ProductList productsData={filter(productsData, productsFilter)} />
            </section>
        </>
    )
}