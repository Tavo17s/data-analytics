import './App.css'
import { Analytics, Hero, Navbar, Cards, Newsletter, Footer } from './components/index'

const App = () => (
  <div className='font-poppins'>
    <Navbar />
    <Hero />
    <Analytics />
    <Newsletter />
    <Cards />
    <Footer />
  </div>
)

export default App