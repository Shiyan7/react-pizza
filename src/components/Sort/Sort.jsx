import React from "react";
import Select from 'react-select'
import styled from "styled-components";

export const Sort = () => {

    const Sort = styled.div`
        position: relative;
    `

    const SortHead = styled.div`
        display: flex;
        align-items: center;
    `

    const Title = styled.h2`
        margin-right: 8px;
        font-size: 14px;
        line-height: 17px;
        font-weight: 700;
    `

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'rgba(254, 95, 30, 0.05);' : '#fff',
            color: state.isSelected ? '#fe5f1e' : '#000',
            fontWeight: state.isSelected ? 700 : 400,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
        }),
    }
    const options = [
        { value: 'popular', label: 'популярности'},
        { value: 'price', label: 'по цене'},
        { value: 'alphabet', label: 'по алфавиту'}
    ]

    return (
        <Sort>
            <SortHead>
                <Title>Сортировка по:</Title>
                <Select
                    options={options}
                    styles={customStyles}
                    defaultValue={options[0]}
                    classNamePrefix="react-select"
                    isSearchable={false}
                />
            </SortHead>
        </Sort>
    )
}