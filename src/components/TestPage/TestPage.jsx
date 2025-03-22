import React, {useEffect} from 'react';
import {useSelectData} from "../../hooks/useSelectData.js";

const TestPage = () => {
    const {filters, setFilters} = useSelectData()
    useEffect(() => {
        console.log('TESTPAGE: ', filters)
    }, [filters])
    return (
        <div>
            <button onClick={(e) => setFilters(pr => ({
                ...pr,
                'first.sfdsdf': `${Math.random() * 10}fsd`
            }))}>TEST BAGE
            </button>
        </div>
    );
};

export default TestPage;