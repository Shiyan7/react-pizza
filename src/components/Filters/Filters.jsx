import React from "react";
import { Filtersbtn } from "../FiltersBtn/FiltersBtn";

export const Filters = ({onToggle, filterProducts}) => {

    const filtersData = [
        {label: 'all', name: 'Все', outline: true, id: 1},
        {label: 'meat', name: 'Мясные', outline: false, id: 2},
        {label: 'vegetarian', name: 'Вегетарианская', outline: false, id: 3},
        {label: 'grill', name: 'Гриль', outline: false, id: 4},
        {label: 'sharp', name: 'Острые', outline: false, id: 5},
        {label: 'closed', name: 'Закрытые', outline: false, id: 6}
    ]

    return (
        <ul className="filters list-reset">
            {filtersData.map(btn => {
                return (
                    <li className="filters__item" key={btn.id}>
                        <Filtersbtn btn={btn} key={btn.id} filterProducts={filterProducts} onClick={onToggle} />
                    </li>
                )
            })}
        </ul>
    )
}