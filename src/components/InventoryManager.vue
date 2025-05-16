
<template>
  <div class="inventory-container">
    <h2>Inventory Management</h2>

    <div class="controls">
      <input v-model="searchQuery" placeholder="Search product..." />
      <select v-model="sortOption">
        <option value="name">Sort by Name</option>
        <option value="stock">Sort by Stock</option>
      </select>
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in filteredAndSortedInventory" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>
            <input v-model.number="product.stock" type="number" min="0" />
            <span v-if="product.stock < 5" class="low-stock">Low Stock!</span>
          </td>
          <td><button @click="updateStock(product)">Update</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { inventory } from '@/assets/inventoryData.js';

const searchQuery = ref('');
const sortOption = ref('name');

const filteredAndSortedInventory = computed(() => {
  let filtered = inventory.filter(product =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  if (sortOption.value === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption.value === 'stock') {
    filtered.sort((a, b) => a.stock - b.stock);
  }

  return filtered;
});

function updateStock(product) {
  alert(`Stock updated for ${product.name}. New stock: ${product.stock}`);
}
</script>

<style scoped>
.inventory-container {
  background-color: #111;
  color: #fff;
  padding: 40px;
  border-radius: 12px;
  max-width: 900px;
  max-height: 900px;
  margin: 40px auto;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.327);
  
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  color: #f0f0f0;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

input,
select {
  background-color: #222;
  color: #fff;
  border: 1px solid #555;
  padding: 10px 12px;
  border-radius: 8px;
  outline: none;
}

input[type="number"] {
  width: 80px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
}

th, td {
  padding: 12px;
  border: 1px solid #333;
  text-align: center;
}

th {
  background-color: #333;
  color: #eee;
}

.low-stock {
  color: #ff4d4d;
  font-weight: bold;
  margin-left: 10px;
}

button {
  background-color: rgba(7, 89, 102, 0.815);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  /* transition: background 0.3s; */
    transition: box-shadow 0.4s ease;

}

button:hover {
  /* background-color: #0ff; */
   box-shadow: 0 0 20px rgba(16, 220, 251, 0.612); /* subtle glow */
}


</style>
