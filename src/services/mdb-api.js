const BASE_URL = 'https://api.themoviedb.org/3'

//this const/function is responsible for loading the movie grid/gallery with the relevant objects
export const getTrendingMovies = async () =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`);
    const data = await response.json()
    return data.results
}
//this const/function is responsible for sending search queries for movies and fetching the results back
export const searchMovieDb = async (query) =>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${import.meta.env.API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
}