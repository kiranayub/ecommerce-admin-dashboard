<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
<template>
  <nav >
    <!-- <router-link class="button" to="/">Home</router-link> | -->
    
    <router-link  class="button" to="/revenue">Revenue</router-link>|
    <router-link class="button" to="/inventory">Inventory</router-link> |
    <router-link class="button" to="/register">Add Product</router-link>
  </nav>

  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Optional basic styling */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 20px;
  background-color: #0d0d0d;
  }


nav {
 margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-exact-active {
  font-weight: bold;
}



.button {
  background-color: #111; /* dark background */
  border-radius: 12px;
  padding: 12px;
  transition: box-shadow 0.4s ease;
  cursor: pointer;
  padding: 12px;
    color: #eaf8f8;

}

.button:hover {
  box-shadow: 0 0 20px rgba(0, 251, 255, 0.3); /* subtle glow */
}

</style>
