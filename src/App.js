import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Snowfall from 'react-snowfall'

// Main app component
const App = () => (
  
  <div className="container">
    <Snowfall snowflakeCount={100}/>
    <Header />
    <Main />
    <Footer />
    
  </div>

)


export default App
