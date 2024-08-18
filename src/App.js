import React from 'react'
import Header from './components/includes/Header'
import Banner from './components/screens/Banner'
import Deals from './components/screens/Deals'
import NewArrivals from './components/screens/NewArrivals'
import WeMade from './components/screens/WeMade'
import Men from './components/screens/Men'
import Women from './components/screens/Women'
import BransDeal from './components/screens/BransDeal'
import LimeLight from './components/screens/LimeLight'


function App() {
  return (
   <> 
    <Header/>
    <Banner/>
    <Deals/>
    <NewArrivals/>
    <WeMade/>
    <Men/>
    <Women/>
    <BransDeal/>
    <LimeLight/>
    
   </> 
  )
}

export default App