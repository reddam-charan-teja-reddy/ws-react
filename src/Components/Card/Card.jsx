import './Card.css'

function Card({ product }) {
  const { id, name, price, description, image, category } = product
  
  return (
    <div className="card">
      <img src={image} className="card-img" alt={name} />
      <div className="card-body">
        <div className="card-1">
          <div className="card-1-left">
            <p className="card-address">{name}</p>
            <p className="card-price">${price.toFixed(2)}</p>
          </div>
          <span className="card-badge">Open</span>
        </div>
        <div className="card-grid">
          <p className="card-text">{description}</p>
          <p className="card-text">{category}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
