import { Route, Routes } from 'react-router-dom'

import './styles/App.css'
import Home from './pages/Home'
import Favorite from './pages/Favorites'
import Navbar from './components/NavBar'

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
      </Routes>
    </main>
    </MovieProvider>
    </>
  )
}

export default App
