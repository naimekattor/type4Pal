import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HowItWorks from './components/HowItWorks'
import QuizAnalysis from './components/QuizAnalysis'
import ProductSuggestions from './components/Products'
import FreequentlyAsked from './components/FreequentlyAsked'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <HowItWorks/>
      <QuizAnalysis/>
      <ProductSuggestions/>
      <FreequentlyAsked/>
      <Footer/>
    </>
  )
}

export default App
