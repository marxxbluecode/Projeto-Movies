import axios from 'axios'

const SeriesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=7e006779defb2248ab13615369adc8a1"
})
export default SeriesApi
