import React, { useState } from 'react'
// import { getSearchData } from './components/Config'

const SearchData = (props) => {
    const [searchData, setSearchData] = useState(null)
    console.log('searchData props', props)

    // useEffect(() => {
    //     getSearchData(searchInput)
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
