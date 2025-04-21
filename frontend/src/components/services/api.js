// This file will handle all API calls for the admin section
// It will be easy to switch from fake store API to your Laravel API later

// Base URL - change this when you switch to your Laravel API
const API_BASE_URL = "https://fakestoreapi.com"

// Products API
export const productsApi = {
  // Get all products
  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`)
      return await response.json()
    } catch (error) {
      console.error("Error fetching products:", error)
      throw error
    }
  },

  // Get a single product
  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`)
      return await response.json()
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error)
      throw error
    }
  },

  // Create a new product
  create: async (productData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      })
      return await response.json()
    } catch (error) {
      console.error("Error creating product:", error)
      throw error
    }
  },

  // Update a product
  update: async (id, productData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      })
      return await response.json()
    } catch (error) {
      console.error(`Error updating product ${id}:`, error)
      throw error
    }
  },

  // Delete a product
  delete: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "DELETE",
      })
      return await response.json()
    } catch (error) {
      console.error(`Error deleting product ${id}:`, error)
      throw error
    }
  },
}

// When you add more entities (orders, customers, etc.), add them here
// Example:
// export const ordersApi = { ... }
// export const customersApi = { ... }

