<!-- <template>
  <div class="home">
    <h1>E-commerce Admin Dashboard</h1>

    <nav>
      <button @click="currentView = 'RevenueDashboard'">Revenue</button>
      <button @click="currentView = 'InventoryManager'">Inventory</button>
      <button @click="currentView = 'ProductRegistration'">Add Product</button>
    </nav>

    <component :is="currentView" />
  </div>
</template>

<script>
import RevenueDashboard from '../components/RevenueDashboard.vue';
import InventoryManager from '../components/InventoryManager.vue';
import ProductRegistration from '../components/ProductRegistration.vue';

export default {
  name: 'HomeView',
  components: {
    RevenueDashboard,
    InventoryManager,
    ProductRegistration,
  },
  data() {
    return {
      currentView: 'RevenueDashboard',
    };
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}
nav {
  margin-bottom: 20px;
}
button {
  margin-right: 10px;
  padding: 8px 14px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
</style> -->

<template>
  <div>
    <h1>E-commerce Admin Dashboard</h1>

    <button @click="currentView = 'RevenueDashboard'">Revenue</button>
    <button @click="currentView = 'InventoryManager'">Inventory</button>
    <button @click="currentView = 'ProductRegistration'">Add Product</button>

    <component :is="currentView" />
  </div>
</template>

<script>
import RevenueDashboard from '../components/RevenueDashboard.vue';
import InventoryManager from '../components/InventoryManager.vue';
import ProductRegistration from '../components/ProductRegistration.vue';

export default {
  name: 'HomeView',
  components: {
    RevenueDashboard,
    InventoryManager,
    ProductRegistration,
  },
  data() {
    return {
      currentView: 'RevenueDashboard',
    };
  },
};
</script>
