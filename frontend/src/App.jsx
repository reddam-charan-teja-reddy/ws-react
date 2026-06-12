import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
// import Card from './Components/Card/Card'
import Products from './Components/Products/Products'

function App() {
  // let toogleMode = () => {
  //   document.body.classList.toggle('dark-mode')
  // }
  return (
    <div className="container">
      <Header />
      <Footer />
      <main className="content">
        <Products />
      </main>
    </div>
  )
}

export default App
