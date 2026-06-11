import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Card from './Components/Card/Card'

function App() {
  let cards = [1, 2, 3, 4, 5, 6]
  return (
    <div className="container">
      <Header />
      <Footer />
      <div className="cards-container">
        {cards.map((card) => (
          <Card key={card} />
        ))}
      </div>
    </div>
  )
}

export default App
