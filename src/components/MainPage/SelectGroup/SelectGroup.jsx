import UiSelect from "../../ui/UiSelect/UiSelect.jsx";
import UiSort from "../../ui/UiSort/UiSort.jsx";
import {useSelectData} from "../../../hooks/useSelectData.js";

const SelectGroup = ({changeFilter,sortToggle}) => {
        const {
            genres, setGenres,
            countries, setCountries,
            years, setYears,
            rating, setRating,
            filmTypes, setFilmTypes,
            selectItem
        } = useSelectData()

        const handleFilterFields = (id, item, setItem, fieldKey) => {
            const name = selectItem(id, item, setItem)
            if (fieldKey === 'typeNumber') {
                changeFilter({[fieldKey]: id})
            } else {
                changeFilter({[fieldKey]: name})
            }
        }

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
                    select={(id) => handleFilterFields(id, filmTypes, setFilmTypes, 'typeNumber')}
                    list={filmTypes}/>
                <UiSort onClick={sortToggle}
                        className="main-page__sort-wrap "/>
            </>
        );
    }
;

export default SelectGroup;