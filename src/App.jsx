import React from "react"
import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import HeroInfo from "./components/HeroInfo/HeroInfo"
import HeaderSection from "./components/HeaderSection/HeaderSection"
import About from "./components/About/About"
import ImageSec from "./components/ImageSec/ImageSec"
import Trending from "./components/Trending/Trending"
import Deals from "./components/Deals/Deals"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
     <NavBar/>
     <Hero/>
     <About/>
     <ImageSec/>
     <Trending/>
     <Deals/>
     <Footer/>
    
    </>
  )
}

export default App
