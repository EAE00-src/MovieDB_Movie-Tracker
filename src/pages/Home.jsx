import MovieCard from '../components/MovieCard'
import { useState } from 'react'

function Home(){

    const [searchQuery, setSearchQuery] = useState('');


    const movies = [
        {id: 1, title: 'Bullet Train', release_date:'2022'},
        {id: 2, title: 'Spider-Man', release_date:'2002'},
        {id: 3, title: 'Iron Man', release_date:'2008'},
    ]

    function handleSearch(e){
        e.preventDefault();
        alert(searchQuery);
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
        </div>
    )
}
export default Home