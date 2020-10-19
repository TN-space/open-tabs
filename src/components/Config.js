import axios from 'axios'

//==================in App.js====================

export const getSearchData = (searchInput) => {
    return axios({
        method: 'GET',
        url: 'https://rapidapi.p.rapidapi.com/breweries/search',
        params: { query: searchInput },
        headers: {
            'x-rapidapi-host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com',
            'x-rapidapi-key': '4bbcd50389mshff3a4a393acb3bep14a5f2jsnf6a5fde81e04'
        }
    })
};