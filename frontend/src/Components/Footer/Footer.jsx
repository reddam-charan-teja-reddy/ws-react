import './Footer.css'
// import { useState } from 'react'
// let toogleMode = () => {
//   document.body.classList.toggle('dark-mode')
// }

function Footer() {
  // const [counter, setCounter] = useState([0])

  // function add() {
  //   setCounter([...counter, counter[counter.length - 1] + 1])
  // }

  return (
    <div className="landing">
      <img
        className="landing-img"
        src="https://zerodha.com/static/images/landing.svg"
        alt="Zerodha Landing"
      ></img>

      <h2> Invest in everything </h2>
      <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <button className="signup-btn">Toggle Dark Mode</button>
      {/* <button onClick={add}> increment </button> */}
    </div>
  )
}

export default Footer
