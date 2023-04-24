import axios from 'axios'

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

// pokeApi.get('/pokemon?limit=152')


export default pokeApi