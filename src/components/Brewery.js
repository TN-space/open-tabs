import React, { useEffect, useState } from 'react'
import { First } from 'react-bootstrap/esm/PageItem'
import { lookUpBreweryConfig } from './Config'


const Brewery = (props) => {
    const [brewery, setBrewery] = useState(null)
    const id = props.match.params.id
    // console.log(props.match.params.id);


    useEffect(() => {
        lookUpBreweryConfig(id)
            // .then(res => console.log(res.data))
            .then(res => setBrewery(res.data))
            .catch(error => console.error(error))
    }, [])

    if (!brewery) {
        return 'please wait...'
    } else {
        const { id, name, website_url, brewery_type, phone, street, city, state, postal_code, country } = brewery
        let formatedPhone
        if (phone) {
            formatedPhone = phone.split('')
            formatedPhone.unshift("(")
            formatedPhone.splice(4, 0, ") ")
            formatedPhone.splice(8, 0, "-")
        }

        return (
            <div className='brewery-container'>
                <h3>{name}</h3>
                <p>{formatedPhone}</p>
                <p><a href={website_url} target='_blank'>{website_url}</a></p>
                <div className='address-container'><p>Address</p>
                    <p>{street}</p>
                    <p>{city}, {state}</p>
                    <p>{postal_code}</p>


                </div>
            </div>
        )
    }

}

export default Brewery

