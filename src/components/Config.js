import axios from 'axios'

//==================in App.js====================

export const searchDataConfig = (searchInput) => {
    return axios({
        "method": "GET",
        "url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
            "x-rapidapi-key": "4bbcd50389mshff3a4a393acb3bep14a5f2jsnf6a5fde81e04",
            "useQueryString": true
        }, "params": {
            "query": `${searchInput}`
        }
    })
};