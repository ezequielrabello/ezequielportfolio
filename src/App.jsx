import Pages from './Components/Pages/Pages'
import './App.css'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })
  return (
    <div>
      <Pages/>
    </div>
  )
}

export default App
