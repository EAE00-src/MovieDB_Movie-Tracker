import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react'

import { getTrendingMovies } from '../services/mdb-api';
import { searchMovieDb } from '../services/mdb-api';

import '../styles/Home.css'

function Home(){

    const [searchQuery, setSearchQuery] = useState('');

    const [movies, setMovies] = useState([]);
    //if an error occurs a message will be 
    const [error, setError] = useState(null);
    //when page content is loading, a loading message will be presented
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTrendingMovies = async () =>{
            try {
               const trendingMovies = await getTrendingMovies();
               setMovies(trendingMovies)
            } catch(err) {
                console.log(err)
                setError("Failed to load movies...")
            } finally{
                setLoading(false)
            }
        }

        loadTrendingMovies()
    }, [])


    /*const movies = [
        {id: 1, title: 'Bullet Train', release_date:'2022'},
        {id: 2, title: 'Spider-Man', release_date:'2002'},
        {id: 3, title: 'Iron Man', release_date:'2008'},
    ] an example of an object and the keys to access different parts of it
        */

    async function handleSearch (e){
        e.preventDefault();
        //this if statement checks if there is a blank submission, giving a loading message
        if(!searchQuery.trim()) {
            return setLoading(true)
        } else if(loading){
            return
        }
        setLoading(true)
        try{
            const searchResults = await searchMovieDb(searchQuery);
            setMovies(searchResults)
            //error message(s) will return null as to not be displayed
            setError(null)
        }catch(err) {
            console.log(err)
            setError("Failed to find the movies you're looking for 😥...")
        } finally{
            //if the search query fails or succeeds, the loading state will return false
            //since the page content is done loading regardless of an error or success
            setLoading(false);
        }

        setSearchQuery('')
    };

    return(
        <div className="home">
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                className='search-input' 
                type='text' 
                placeholder='Find your movies here...'
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                /> {/*(e) passes user input to setSearchQuery to update the State of the respective element*/}

                <button type='submit' className='search-button'>Search</button>
            </form>

            {error && <div className='error-message'>{error}</div>}
            {loading ? (<div className='loading'>Loading...</div>) : (
                <div className="movies-grid">
                    {movies.map(
                        (movie) => 
                            movie.title.toLowerCase().startsWith(searchQuery) && (
                            <MovieCard movie={movie} key={movie.id} />
                        ) 
                    )} 
                        {/*Line 37 will conditionally render the specific MovieCard only 
                        if the movie.title matches the searchQuery input (lowercase only), otherwise, all movies are shown*/}
                </div>
            )}

        </div>
    )
}
export default Home