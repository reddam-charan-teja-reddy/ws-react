import { API_BASE_URL } from '../../config'

const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products` || 'http://localhost:3000/products')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export default fetchProducts
