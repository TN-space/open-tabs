import React, { useState, useEffect, useContext } from 'react'
import { searchDataConfig } from './Config'
import { SearchContext } from '../App'

const SearchData = (props) => {
    const [searchData, setSearchData] = useState(null)
    const searchContextTerm = useContext(SearchContext)
    console.log('searchData props, contextTerm', searchContextTerm)
    console.log('searchData props, input', props)


    // useEffect(() => {
    //     console.log('used Effect');

    //     searchDataConfig(searchTerm)
    //         .then(res => console.log(res))
    //         // .then(res => setSearchData(res))
    //         .catch(error => console.error(error))
    // }, [])

    return (
        <div>
            <h2>Search Result!!</h2>
        </div>
    )
}

export default SearchData
