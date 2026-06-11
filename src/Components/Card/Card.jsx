import './Card.css'

function Card() {
  return (
    <div className="card">
      <img
        src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/25/24344c96-927e-4b02-bbc6-48ba220d97d7_image0a89957f9b4fa4ae1ad460756ca6b22ad.JPG"
        className="card-img"
        alt="Restaurant"
      />
      <div className="card-body">
        <div className="card-1">
          <div className="card-1-left">
            <p className="card-address">Address</p>
            <p className="card-price">Price</p>
          </div>
          <span className="card-badge">Open</span>
        </div>
        <div className="card-grid">
          <p className="card-text">Text1</p>
          <p className="card-text">Text2</p>
        </div>
      </div>
    </div>
  )
}

export default Card
