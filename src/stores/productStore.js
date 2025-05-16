// src/stores/productStore.js
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Smartphone',
        description: 'Android phone',
        price: 499,
        stock: 10,
        category: 'Electronics',
        image: '',
        orders: 5,
        revenue: 2495,
        createdAt: new Date('2024-01-15')
      },
      {
        id: 2,
        name: 'Laptop',
        description: 'Gaming laptop',
        price: 999,
        stock: 5,
        category: 'Electronics',
        image: '',
        orders: 3,
        revenue: 2997,
        createdAt: new Date('2024-02-10')
      }
    ]
  }),
  actions: {
    addProduct(product) {
      product.id = Date.now()
      product.createdAt = new Date()
      product.orders = 0
      product.revenue = 0
      this.products.push(product)
    },
    updateStock(id, newStock) {
      const product = this.products.find(p => p.id === id)
      if (product) product.stock = newStock
    }
  }
})
