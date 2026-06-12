import './Header.css'

function Header() {
  return (
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
  )
}

export default Header
