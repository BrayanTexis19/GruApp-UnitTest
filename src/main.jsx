import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './routes/LoginPage.jsx'
import UserPage from './routes/UserPage.jsx'
import CorralonesPage from './routes/CorralonesPage.jsx'
import RecordsPage from './routes/RecordsPage.jsx'
import TrazadoPage from './routes/TrazadoPage.jsx'
import MenuContainer from './components/MenuContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<App />}>
                  <Route index path='/' element={<MenuContainer/> } />
                  <Route path='Usuarios' element={<UserPage/> } />
                  <Route path='Corralones' element={<CorralonesPage/> } />
                  <Route path='Registros' element={<RecordsPage/> } />
                  <Route path='Trazado-Rutas' element={<TrazadoPage/>} />
            </Route> 
          </Routes> 
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
