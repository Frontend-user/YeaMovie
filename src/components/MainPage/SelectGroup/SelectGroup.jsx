import React, {useEffect, useState} from 'react';
import UiSelect from "../../ui/UiSelect/UiSelect.jsx";
import UiSort from "../../ui/UiSort/UiSort.jsx";
import {useSelectData} from "../../../hooks/useSelectData.js";

const SelectGroup = () => {


        const {
            genres, setGenres,
            countries, setCountries,
            years, setYears,
            rating, setRating,
            filmTypes, setFilmTypes,
            filters, setFilters, selectItem, testItem, setTestItem
        } = useSelectData()

        const handleFilterFields = (id, item, setItem, fieldKey) => {
            const name = selectItem(id, item, setItem)
            // console.log('fieldKey', fieldKey)
            // if (fieldKey && name !== undefined) {

            // setFilters(pr => ({...pr, [fieldKey]: name}));
            setFilters(pr => ({
                ...pr,
                'CHANGED': `${Math.random() * 10}fsd`
            }));
            // console.log(filters,'FILTERS IN')
            // setFilters(elem)
            // console.log('elEM: ', elem)
            // }
            // setFilters(pr => ({...pr, [fieldKey]: name}))
            // console.log(filters)/**/
            // setTestItem({})
            // setFilters({...filters, [fieldKey]: name})
        }

    // useEffect(() => {
    //     console.log('SELECTGROP COMPONENT',filters)
    // }, [filters]);
        return (
            <>
                <UiSelect className="main-page__ui-select"
                          select={(id) => handleFilterFields(id, genres, setGenres, 'genres.name')}
                          list={genres}/>
                <UiSelect
                    className="main-page__ui-select"
                    select={(id) => handleFilterFields(id, countries, setCountries, 'countries.name')}
                    list={countries}/>
                <UiSelect
                    className="main-page__ui-select"
                    select={(id) => handleFilterFields(id, years, setYears, 'year')}
                    list={years}/>
                <UiSelect
                    className="main-page__ui-select"
                    select={(id) => handleFilterFields(id, rating, setRating, 'rating.imdb')}
                    list={rating}/>
                <UiSelect
                    className="main-page__ui-select"
                    select={(id) => handleFilterFields(id, filmTypes, setFilmTypes, 'filmTypes')}
                    list={filmTypes}/>
                <UiSort className="main-page__sort-wrap "/>
            </>
        );
    }
;

export default SelectGroup;