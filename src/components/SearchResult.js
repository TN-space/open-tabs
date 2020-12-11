import React, { useState, useEffect, useContext } from 'react'
import Loading from './utilities/Loading'
import { searchResultConfig } from './utilities/Config'
import { SearchContext } from '../App'
import { Link } from 'react-router-dom'

const SearchResult = (props) => {
    const [searchData, setSearchData] = useState(null)
    const searchContextInput = useContext(SearchContext)
    let param = props.match.params.result
    let fetched, retrieved



    useEffect(() => {
        searchResultConfig(searchContextInput)
            // .then(res => console.log(res.data))
            .then(res => setSearchData(res.data))
            .catch(error => console.error(error))
    }, [param])

    // console.log('pathname:', window.location.pathname.substr(8));

    if (!searchData && !fetched) {
        return <Loading />
    }
    // else if (retrieved) {

    //     return (
    //         <div className='brewery-container'>
    //             <h2>Retrieved Result!!</h2>
    //             {retrieved.map((brewery) => (
    //                 <Link key={brewery.id} className='brewery-link' to={{
    //                     pathname: `brewery/${brewery.id}`, state: { id: `${brewery.id}` }
    //                 }}>
    //                     <li key={retrieved.id} className='brewery-name'>{brewery.name} ({brewery.city}, {brewery.state})</li>
    //                 </Link>
    //             ))}
    //         </div>
    //     )
    // } 
    else {
        // localStorage.setItem('fetched', searchData)
        // retrieved = localStorage.getItem('fetched')
        // console.log('retrieved:', retrieved);

        const { id, name, website_url, brewery_type, phone, country, state, city, street, postal_code } = searchData
        console.log(searchData);

        if (searchData.length === 0) {
            return 'Results not found!'
        } else {
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

}

export default SearchResult
