import React, { useState, useEffect } from 'react' // add useContext into {..} if searchInput is taken from useContext
import Loading from './utilities/Loading'
import { searchResultConfig } from './utilities/Config'
// uncomment line below if use searchContext to get searchInput
// import { SearchContext } from '../App'
import { Link } from 'react-router-dom'
import { GiBottleCap } from 'react-icons/gi'

const SearchResult = (props) => {
    const [searchData, setSearchData] = useState(null)
    let searchInput = props.match.params.result

    // 2nd way to get searchInput: from searchContext
    // const searchContextInput = useContext(SearchContext)

    // make an API call to BreweryDB using searchInput
    useEffect(() => {
        // searchResultConfig is imported from Config.js
        searchResultConfig(searchInput)
            .then(res => setSearchData(res.data))
            .catch(error => console.error(error))
        // eslint-disable-next-line
    },
        // make an API call and re-render every time there is a new searchInput 
        [searchInput])

    if (!searchData) {
        return <Loading />
    } else {
        // uncomment line below if need more information from a brewery
        // const { id, name, website_url, brewery_type, phone, country, state, city, street, postal_code } = searchData

        if (searchData.length === 0) {
            return (<h1 className='no-found'>No Results Found For <span>{searchInput}</span>!</h1>)
        } else {
            return (
                <div className='brews-container'>
                    {searchData.map((brewery) => (
                        <Link key={brewery.id} className='brew-link' to={{
                            pathname: `brewery/${brewery.id}`, state: { id: `${brewery.id}` }
                        }}>
                            <ul>
                                <li key={brewery.id} className='brew-name'>
                                    <span className='bottleCap'><GiBottleCap /></span>
                                    {brewery.name}
                                    <span className='location'>({brewery.city}, {brewery.state})</span>
                                </li>
                            </ul>
                        </Link>

                    ))}


                </div>
            )
        }

    }

}

export default SearchResult
