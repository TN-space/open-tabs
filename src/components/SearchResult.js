import React, { useState, useEffect, useContext } from 'react'
import Loading from './utilities/Loading'
import { searchResultConfig } from './utilities/Config'
import { SearchContext } from '../App'
import { Link } from 'react-router-dom'
import { GiBottleCap } from 'react-icons/gi'

const SearchResult = (props) => {
    const [searchData, setSearchData] = useState(null)
    const searchContextInput = useContext(SearchContext)
    let param = props.match.params.result
    let fetched



    useEffect(() => {
        searchResultConfig(searchContextInput)
            // .then(res => console.log(res.data))
            .then(res => setSearchData(res.data))
            .catch(error => console.error(error))
    }, [param])

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

        if (searchData.length === 0) {
            return (<h1>Results not found!</h1>)
        } else {
            return (
                <div className='brews-container'>
                    {searchData.map((brewery) => (
                        <ul>
                            <Link key={brewery.id} className='brew-link' to={{
                                pathname: `brewery/${brewery.id}`, state: { id: `${brewery.id}` }
                            }}>
                                <li key={id} className='brew-name'>
                                    <span className='bottleCap'><GiBottleCap /></span>
                                    {brewery.name}
                                    <span className='location'>({brewery.city}, {brewery.state})</span>
                                </li>
                            </Link>
                        </ul>
                    ))}


                </div>
            )
        }

    }

}

export default SearchResult
