

// import { reactive } from 'vue';

// export const inventory = reactive([
//   { name: 'Product A', description: 'Sample', price: 100, stock: 10, category: 'Electronics' },
//   { name: 'Product B', description: 'Sample', price: 200, stock: 5, category: 'Clothing' }
// ]);


// src/assets/inventoryData.js
import { reactive } from 'vue';

export const inventory = reactive([
  {
    name: 'Sample Product 1',
    description: 'Basic description',
    category: 'Electronics',
    price: 100,
    stock: 10,
    image: '',
    addedAt: "2025-05-15T09:00:00Z"
  },
  {
    name: 'Sample Product 2',
    description: 'Another item',
    category: 'Clothing',
    price: 50,
    stock: 5,
    image: '',
    addedAt: "2025-06-15T09:00:00Z"
  }
]);
