import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import Loading from './utilities/Loading'
import { lookUpBreweryConfig } from './utilities/Config'

const Brewery = (props) => {
    const [brewery, setBrewery] = useState(null)
    const id = props.match.params.id
    // useHistory function goBack() to go back to previous page
    let history = useHistory()

    // Make an API call for a specific id
    useEffect(() => {
        lookUpBreweryConfig(id)
            .then(res => setBrewery(res.data))
            .catch(error => console.error(error))
        // eslint-disable-next-line
    }, [])

    if (!brewery) {
        return <Loading />
    } else {
        const { name, website_url, phone, street, city, state, postal_code } = brewery
        // uncomment line below if need more information for a brewery
        // const { id, name, website_url, brewery_type, phone, street, city, state, postal_code, country } = brewery

        let formatedPhone
        // format phone number to (XXX) XXX-XXX
        if (phone) {
            formatedPhone = phone.split('')
            formatedPhone.unshift("(")
            formatedPhone.splice(4, 0, ") ")
            formatedPhone.splice(8, 0, "-")
        }

        return (
            <div className='brew-container'>
                <div className='brew-info'>
                    <div>
                        <h1>{name}</h1>
                        <p>{formatedPhone}</p>
                        <p><a href={website_url} target='_blank' rel='noopener noreferrer'>{website_url}</a></p>
                    </div>

                    <div className='address'>
                        <p id='address'>Address:</p>
                        <p>{street}</p>
                        <p>{city}, {state} {postal_code}</p>
                    </div>
                    <button onClick={() => history.goBack()}>back</button>
                </div>

            </div>
        )
    }
    // return <Loading />

}

export default Brewery

