import './App.css'

function App() {
  return (
    <div className="container">
      <header className="head">
        <div className="logo-container">
          <img
            className="logo"
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha Logo"
          ></img>
        </div>
        <div className="nav">
          <nav className="nav-links">
            <a href="">Sign Up</a>
            <a href="">About</a>
            <a href="">Products</a>
            <a href="">Support</a>
            <a href="">Pricing</a>
          </nav>
        </div>
      </header>
      <div className="landing">
        <img
          className="landing-img"
          src="https://zerodha.com/static/images/landing.svg"
          alt="Zerodha Landing"
        ></img>

        <h2> Invest in everything </h2>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        <button className="signup-btn">Sign Up for Free</button>
      </div>
    </div>
  )
}

export default App
