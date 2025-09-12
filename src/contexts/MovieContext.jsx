import { createContext, useState, useContext, useEffect } from "react";


const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

//this const will provide state to any of the components that are wrapped around it
export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem('favorites')

        if (storedFavs){
            setFavorites(JSON.parse(storedFavs))
        }
    }, [])


    useEffect(() =>{
        //any time favorites is changed, the 'favorites' item will be updated with new items or be removed
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    function addToFavorites(movie){
        setFavorites(prev => [...prev, movie])
    }

    function removeFromFavorites(movieID) {
        setFavorites(prev => prev.filter( movie => movie.id !== movieID))
    }

    function isFavorite(movieID){
        return favorites.some(movie => movie.id === movieID)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}
