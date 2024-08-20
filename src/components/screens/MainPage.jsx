import React from 'react'
import Header from '../includes/Header'

import Banner from '../screens/Banner'
import Deals from '../screens/Deals'
import NewArrivals from '../screens/NewArrivals'
import WeMade from '../screens/WeMade'
import Men from '../screens/Men'
import Women from '../screens/Women'
import BransDeal from '../screens/BransDeal'
import LimeLight from '../screens/LimeLight'
import FeedBack from '../screens/FeedBack'
import Footer from '../includes/Footer'


function MainPage() {
  return (
    <div>
    <Header/>
    <Banner/>
    <Deals/>
    <NewArrivals/>
    <WeMade/>
    <Men/>
    <Women/>
    <BransDeal/>
    <LimeLight/>
    <FeedBack/>
    <Footer/>
    </div>
  )
}

export default MainPage