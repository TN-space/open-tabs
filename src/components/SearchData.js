import React, { useState, useEffect, useContext } from 'react'
import { searchDataConfig } from './Config'
import { SearchContext } from '../App'
import { Link } from 'react-router-dom'

const SearchData = (props) => {
    console.log('props', props);
    const [searchData, setSearchData] = useState(null)
    const searchContextInput = useContext(SearchContext)
    let param = props.match.params.result
    console.log('param:', param)


    useEffect(() => {
        searchDataConfig(searchContextInput)
            // .then(res => console.log(res.data))
            .then(res => setSearchData(res.data))
            .catch(error => console.error(error))
    }, [param])
    console.log('data', searchData);
    // console.log('data.brew', searchData[1]);



    if (!searchData) {
        return 'please wait...'
    } else {
        const { id, name, website_url, brewery_type, phone, country, state, city, street, postal_code } = searchData

        return (
            <div className='brewery-container'>
                <h2>Search Result!!</h2>
                {searchData.map((brewery) => (
                    <Link key={brewery.id} className='brewery-link' to={{
                        pathname: `brewery/${brewery.id}`, state: { id: `${brewery.id}` }
                    }}>
                        <li key={id} className='brewery-name'>{brewery.name} ({brewery.city}, {brewery.state})</li>
                    </Link>
                ))}
            </div>
        )
    }

}

export default SearchData
