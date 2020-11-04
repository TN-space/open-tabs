import React, { useEffect, useState } from 'react'
import { lookUpBreweryConfig } from './Config'


const Brewery = (props) => {
    const [brewery, setBrewery] = useState(null)
    const id = props.match.params.id
    // console.log(props.match.params.id);
    useEffect(() => {
        lookUpBreweryConfig(id)
            .then(res => console.log(res))
            // .then(res => setBrewery(res))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h1>Brewery</h1>
        </div>
    )
}

export default Brewery

