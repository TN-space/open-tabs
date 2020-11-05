import axios from 'axios'

//==================in App.js====================

// export const searchResultConfig = (searchInput) => {
//     return axios({
//         "method": "GET",
//         "url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search",
//         "headers": {
//             "content-type": "application/octet-stream",
//             "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
//             "x-rapidapi-key": "4bbcd50389mshff3a4a393acb3bep14a5f2jsnf6a5fde81e04",
//             "useQueryString": true
//         }, "params": {
//             "query": `${searchInput}`
//         }
//     })
// };

export const searchResultConfig = (searchInput) => {
    return axios({
        "async": true,
        "crossDomain": true,
        "url": `https://rapidapi.p.rapidapi.com/breweries/search?query=${searchInput}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "4bbcd50389mshff3a4a393acb3bep14a5f2jsnf6a5fde81e04",
            "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com"
        }
    })
};

export const lookUpBreweryConfig = (id) => {
    return axios({
        "async": true,
        "crossDomain": true,
        "url": `https://rapidapi.p.rapidapi.com/breweries/${id}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "4bbcd50389mshff3a4a393acb3bep14a5f2jsnf6a5fde81e04",
            "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com"
        }
    })
}