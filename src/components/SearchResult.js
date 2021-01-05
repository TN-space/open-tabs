import React, { useState, useEffect, useContext } from 'react'
import Loading from './utilities/Loading'
import { searchResultConfig } from './utilities/Config'
import { SearchContext } from '../App'
import { Link } from 'react-router-dom'
import { GiBottleCap } from 'react-icons/gi'

const SearchResult = (props) => {
    const [searchData, setSearchData] = useState(null)
    let searchInput = props.match.params.result

    // 2nd way to get searchInput: from searchContext
    // const searchContextInput = useContext(SearchContext)

    useEffect(() => {
        searchResultConfig(searchInput)
            .then(res => setSearchData(res.data))
            .catch(error => console.error(error))
    }, [searchInput])

    if (!searchData) {
        return <Loading />
    }

    else {

        const { id, name, website_url, brewery_type, phone, country, state, city, street, postal_code } = searchData

        if (searchData.length === 0) {
            return (<h1 className='no-found'>No Results Found For <span>{searchInput}</span>!</h1>)
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
