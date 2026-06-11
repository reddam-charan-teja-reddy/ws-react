import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
// import Card from './Components/Card/Card'
import Products from './Components/Products/Products'

function App() {
  let cards = [1, 2, 3, 4, 5, 6]
  return (
    <div className="container">
      <Header />
      <Footer />
      <Products />
    </div>
  )
}

export default App
