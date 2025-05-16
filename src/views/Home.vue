

<template>
  <div>
    <h1>E-commerce Admin Dashboard</h1>

    <!-- <button @click="currentView = 'RevenueDashboard'">Revenue</button>
    <button @click="currentView = 'InventoryManager'">Inventory</button>
    <button @click="currentView = 'ProductRegistration'">Add Product</button> -->

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
