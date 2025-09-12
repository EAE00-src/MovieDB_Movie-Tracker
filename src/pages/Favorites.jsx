import '../styles/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorite(){

    const {favorites} = useMovieContext();

    if(favorites){
        return (
            <>
            <div className='favorites'>
                <h2>Your Favorites</h2>
            </div>
            <div className="movies-grid">
                {favorites.map(
                    (movie) => 
                        (<MovieCard movie={movie} key={movie.id} />) 
                )} 
                    {/*Line 14 will conditionally render the specific MovieCard only 
                        if the movie.title matches the searchQuery input (lowercase only), otherwise, all movies are shown*/}
            </div>
            </>
        )
    };

    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet 💔</h2>
            <p>Start adding movies to your favorites and they'll appear here!</p>
        </div>
    )
}


export default Favorite