<!-- <template>
  <div class="inventory-manager">
    <h2>Inventory Management</h2>

    <input v-model="searchTerm" placeholder="Search products..." />

    <table>
      <thead>
        <tr>
          <th @click="sortBy('name')">Product Name</th>
          <th @click="sortBy('stock')">Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>{{ product.name }}</td>
          <td :style="{ color: product.stock < 10 ? 'red' : 'black' }">{{ product.stock }}</td>
          <td>
            <input type="number" v-model.number="product.stock" min="0" />
            <button @click="updateStock(product)">Update</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="alerts">
      <h4>⚠ Low Inventory Alerts</h4>
      <ul>
        <li v-for="p in lowInventory" :key="p.id">{{ p.name }} ({{ p.stock }} left)</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InventoryManager',
  data() {
    return {
      searchTerm: '',
      sortKey: '',
      sortAsc: true,
      products: [
        { id: 1, name: 'Laptop', stock: 9 },
        { id: 2, name: 'Shoes', stock: 24 },
        { id: 3, name: 'T-Shirt', stock: 5 },
        { id: 4, name: 'Book', stock: 11 },
      ],
    };
  },
  computed: {
    filteredProducts() {
      let result = this.products.filter(p =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      if (this.sortKey) {
        result.sort((a, b) => {
          if (this.sortAsc) {
            return a[this.sortKey] > b[this.sortKey] ? 1 : -1;
          } else {
            return a[this.sortKey] < b[this.sortKey] ? 1 : -1;
          }
        });
      }
      return result;
    },
    lowInventory() {
      return this.products.filter(p => p.stock < 10);
    },
  },
  methods: {
    sortBy(key) {
      if (this.sortKey === key) {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortKey = key;
        this.sortAsc = true;
      }
    },
    updateStock(product) {
      alert(`${product.name} stock updated to ${product.stock}`);
    },
  },
};
</script>

<style scoped>
.inventory-manager {
  padding: 20px;
}
input {
  margin-bottom: 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  cursor: pointer;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
}
.alerts {
  margin-top: 20px;
  background: #fff3cd;
  padding: 10px;
  border: 1px solid #ffeeba;
}
</style> -->

<!-- 
// src/components/InventoryManager.vue
<template>
  <div>
    <h2>Inventory Management</h2>

    <input v-model="search" placeholder="Search products..." class="input" />
    <select v-model="sortKey" class="input">
      <option value="name">Sort by Name</option>
      <option value="stock">Sort by Stock</option>
    </select>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Stock</th>
          <th>Update Stock</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <input v-model.number="updatedStocks[product.id]" type="number" min="0" class="stock-input" />
            <button @click="updateStock(product.id)">Update</button>
          </td>
          <td>
            <span v-if="product.stock < 5" class="low-stock">Low Stock!</span>
            <span v-else>OK</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore'
import { computed, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useProductStore()
    const { products } = storeToRefs(store)

    const search = ref('')
    const sortKey = ref('name')
    const updatedStocks = reactive({})

    const filteredProducts = computed(() => {
      let filtered = products.value.filter(p =>
        p.name.toLowerCase().includes(search.value.toLowerCase())
      )
      return filtered.sort((a, b) => {
        if (sortKey.value === 'stock') return a.stock - b.stock
        return a.name.localeCompare(b.name)
      })
    })

    const updateStock = id => {
      const newStock = updatedStocks[id]
      if (!isNaN(newStock)) {
        store.updateStock(id, newStock)
      }
    }

    return { products, search, sortKey, updatedStocks, filteredProducts, updateStock }
  }
}
</script>

<style scoped>
.input {
  margin: 10px;
  padding: 6px;
}
.stock-input {
  width: 60px;
  padding: 4px;
}
.low-stock {
  color: red;
  font-weight: bold;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
}
</style> -->



<!-- 
<template>
  <div>
    <h2>Inventory Management</h2>

    <input v-model="searchQuery" placeholder="Search product..." />

    <select v-model="sortOption">
      <option value="name">Sort by Name</option>
      <option value="stock">Sort by Stock</option>
    </select>

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
            <span v-if="product.stock < 5" style="color: red;">Low Stock!</span>
          </td>
          <td><button @click="updateStock(index)">Update</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template> -->
<!-- 
<script setup>
import { reactive, computed } from 'vue';
import { inventory } from '@/assets/inventoryData.js';

const searchQuery = reactive({ value: '' });
const sortOption = reactive({ value: 'name' });

const filteredAndSortedInventory = computed(() => {
  let result = inventory.filter(product =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  if (sortOption.value === 'name') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption.value === 'stock') {
    result.sort((a, b) => a.stock - b.stock);
  }

  return result;
});

function updateStock(index) {
  alert(`Stock updated for ${inventory[index].name}`);
}
</script> -->
<!-- 
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
td, th {
  padding: 8px;
  border: 1px solid #ccc;
}
input {
  padding: 4px;
}
</style> -->

<!-- 
<template>
  <div>
    <h2>Inventory Management</h2>

    <input v-model="searchQuery" placeholder="Search product..." />

    <select v-model="sortOption">
      <option value="name">Sort by Name</option>
      <option value="stock">Sort by Stock</option>
    </select>

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
            <span v-if="product.stock < 5" style="color: red;">Low Stock!</span>
          </td>
          <td><button @click="updateStock(product)">Update</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// const inventory = JSON.parse(localStorage.getItem('products')) || [];

import { inventory } from '@/assets/inventoryData.js';

const searchQuery = ref('');
const sortOption = ref('name');

// Computed sorted & filtered inventory
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

// Update stock alert
function updateStock(product) {
  alert(`Stock updated for ${product.name}. New stock: ${product.stock}`);
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
td, th {
  padding: 8px;
  border: 1px solid #ccc;
}
input {
  padding: 4px;
}
</style> -->




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
