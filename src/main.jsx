// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import Profile from './pages/Profile/Profile.jsx'
import Gallery from './components/Gallery/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Gallery/>
    <Profile />
    <App />
  </ChakraProvider>,
)
