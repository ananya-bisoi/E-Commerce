import React from 'react'
import Slider from '../Components/LandingPage/Slider'
import TopProducts from '../Components/LandingPage/TopProducts'
import NewlyLaunched from '../Components/LandingPage/NewlyLaunched' 

const Home = () => {
  return (
    <div>
     <Slider/> 
     <TopProducts/>
     <NewlyLaunched/>
    </div>
  )
}

export default Home
