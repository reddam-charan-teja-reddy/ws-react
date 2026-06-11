import React from 'react'
import { useState } from 'react'

import fetchProducts from './fetchProducts.js'

import './Products.css'
import Card from '../Card/Card.jsx'

function Products() {
  const [products, setProducts] = useState([])

  async function showProducts() {
    /*   {
    card1 =  [
      {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      },
    ]*/
    const data = await fetchProducts()
    setProducts(data)
  }

  return (
    <section className="products-section">
      <div className="products-actions">
        <h1>Products</h1>
        <button onClick={showProducts}>Fetch Products</button>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Products
