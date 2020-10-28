import React, { useState, useEffect, useContext } from 'react'
import { searchDataConfig } from './Config'
import { SearchContext } from '../App'

const SearchData = () => {
    const [searchData, setSearchData] = useState(null)
    const searchContextInput = useContext(SearchContext)
    console.log('searchData, contextTerm:', searchContextInput)


    useEffect(() => {
        searchDataConfig(searchContextInput)
            .then(res => console.log(res.data))
            // .then(res => setSearchData(res))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h2>Search Result!!</h2>
        </div>
    )
}

export default SearchData
