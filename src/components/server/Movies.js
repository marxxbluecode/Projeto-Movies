import axios from 'axios'

const MoviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=7e006779defb2248ab13615369adc8a1"
})
export default MoviesApi
