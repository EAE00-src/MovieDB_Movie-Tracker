import { Route, Routes } from 'react-router-dom'

import './styles/App.css'
import Home from './pages/Home'
import Favorite from './pages/Favorites'
import Navbar from './components/NavBar'
import Error from './components/Error/Error'

import { MovieProvider } from './contexts/MovieContext'

function App() {


  return (
    <>
    <MovieProvider>
      <Navbar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorite />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </main>
    </MovieProvider>
    </>
  )
}

export default App
