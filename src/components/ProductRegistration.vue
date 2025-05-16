<!-- <template>
  <div class="product-registration">
    <h2>Register New Product</h2>

    <form @submit.prevent="submitForm">
      <label>Product Name:</label>
      <input v-model="product.name" required />

      <label>Description:</label>
      <textarea v-model="product.description" required></textarea>

      <label>Price:</label>
      <input type="number" v-model.number="product.price" required />

      <label>Initial Stock:</label>
      <input type="number" v-model.number="product.stock" required />

      <label>Image:</label>
      <input type="file" @change="handleImage" />

      <button type="submit">Add Product</button>
    </form>

    <div class="preview" v-if="product.imageUrl">
      <h4>Image Preview:</h4>
      <img :src="product.imageUrl" alt="Preview" width="150" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductRegistration',
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: 0,
        stock: 0,
        image: null,
        imageUrl: '',
      },
    };
  },
  methods: {
    handleImage(event) {
      const file = event.target.files[0];
      if (file) {
        this.product.image = file;
        this.product.imageUrl = URL.createObjectURL(file);
      }
    },
    submitForm() {
      console.log('Product Submitted:', this.product);
      alert(`Product "${this.product.name}" added successfully!`);
      this.resetForm();
    },
    resetForm() {
      this.product = {
        name: '',
        description: '',
        price: 0,
        stock: 0,
        image: null,
        imageUrl: '',
      };
    },
  },
};
</script>

<style scoped>
.product-registration {
  padding: 20px;
  max-width: 600px;
}
form {
  display: flex;
  flex-direction: column;
}
input, textarea {
  margin-bottom: 10px;
  padding: 5px;
}
button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.preview {
  margin-top: 15px;
}
</style> -->


<!-- 
<template>
  <div class="product-registration">
    <h2>Add New Product</h2>
    <form @submit.prevent="addProduct">
      <input v-model="product.name" placeholder="Product Name" required />
      <input v-model="product.category" placeholder="Category" required />
      <textarea v-model="product.description" placeholder="Description"></textarea>
      <input v-model.number="product.price" type="number" placeholder="Price" required />
      <input v-model.number="product.stock" type="number" placeholder="Initial Stock" required />
      <input type="file" @change="handleImageUpload" />
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        category: '',
        description: '',
        price: 0,
        stock: 0,
        image: ''
      }
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.product.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    addProduct() {
      const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
      savedProducts.push(this.product);
      localStorage.setItem('products', JSON.stringify(savedProducts));
      alert('Product Added!');
      this.product = {
        name: '',
        category: '',
        description: '',
        price: 0,
        stock: 0,
        image: ''
      };
    }
  }
};
</script>

<style scoped>
.product-registration {
  padding: 20px;
}
input,
textarea {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
}
</style> -->


<!-- <template>
  <div>
    <h2>Add New Product</h2>
    <form @submit.prevent="addProduct">
      <label>
        Product Name:
        <input v-model="product.name" required />
      </label>
      <br />

      <label>
        Description:
        <input v-model="product.description" required />
      </label>
      <br />

      <label>
        Category:
        <input v-model="product.category" required />
      </label>
      <br />

      <label>
        Price:
        <input v-model.number="product.price" type="number" required />
      </label>
      <br />

      <label>
        Stock:
        <input v-model.number="product.stock" type="number" required />
      </label>
      <br />

      <label>
        Image:
        <input type="file" @change="handleImageUpload" />
      </label>
      <br />
      <div v-if="product.image">
        <img :src="product.image" alt="Product Image" style="width: 100px;" />
      </div>

      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { inventory } from '@/assets/inventoryData.js';

const product = reactive({
  name: '',
  description: '',
  category: '',
  price: 0,
  stock: 0,
  image: '',
  addedAt: new Date().toISOString()
});

function addProduct() {
  if (product.name && product.category && product.price >= 0 && product.stock >= 0) {
    inventory.push({ ...product });
    alert('Product added successfully!');
    // addedAt: new Date(Date.now() - Math.random() * 10000000000).toISOString()
   // addedAt: new Date().toISOString()

    resetForm();
  } else {
    alert('Please fill all fields correctly.');
  }
} -->
<!-- 
// function addNewProduct(newProduct) {
//   inventory.push(newProduct);
//   localStorage.setItem('products', JSON.stringify(inventory));
// }

// function handleImageUpload(event) {
//   const file = event.target.files[0];
//   if (file) {
//     product.image = URL.createObjectURL(file);
//   }
// }

// function resetForm() {
//   product.name = '';
//   product.description = '';
//   product.category = '';
//   product.price = 0;
//   product.stock = 0;
//   product.image = '';
// }
// </script> -->

<!-- <style scoped>
form {
  max-width: 400px;
}
input {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
}
</style> -->


<template>
  <div class="add-product-container">
    <h2>Add New Product</h2>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label>Product Name</label>
        <input v-model="product.name" required />
      </div>

      <div class="form-group">
        <label>Description</label>
        <input v-model="product.description" required />
      </div>

      <div class="form-group">
        <label>Category</label>
        <input v-model="product.category" required />
      </div>

      <div class="form-group">
        <label>Price</label>
        <input v-model.number="product.price" type="number" required />
      </div>

      <div class="form-group">
        <label>Stock</label>
        <input v-model.number="product.stock" type="number" required />
      </div>

      <div class="form-group">
        <label>Image</label>
        <input type="file" @change="handleImageUpload" />
      </div>

      <div v-if="product.image" class="preview">
        <img :src="product.image" alt="Product Image" />
      </div>

      <button type="submit" class="button">Add Product</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { inventory } from '@/assets/inventoryData.js';

const product = reactive({
  name: '',
  description: '',
  category: '',
  price: 0,
  stock: 0,
  image: '',
  addedAt: new Date().toISOString()
});

function addProduct() {
  if (product.name && product.category && product.price >= 0 && product.stock >= 0) {
    inventory.push({ ...product });
    alert('✅ Product added successfully!');
    resetForm();
  } else {
    alert('❌ Please fill all fields correctly.');
  }
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    product.image = URL.createObjectURL(file);
  }
}

function resetForm() {
  product.name = '';
  product.description = '';
  product.category = '';
  product.price = 0;
  product.stock = 0;
  product.image = '';
}
</script>

<style scoped>
.add-product-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  padding-right: 50px;
  border-radius: 20px;
  background-color: #111;
  box-shadow: 0 0 3px #0ff;
  color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: rgb(215, 242, 136);
  text-shadow: 0 0 3px #0ff;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #0ff;
  font-weight: bold;
}


input,
textarea {
  width: 100%;
  padding: 10px;
  background: #222;
  border: 1px solid #0ff;
  border-radius: 8px;
  color: #0ff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.25) inset;
  transition: 0.3s ease-in-out;
}



input[type="number"],
textarea,
input[type="file"] {
  width: 100%;
  padding: 10px;
  background: #222;
  border: 1px solid #0ff;
  border-radius: 8px;
  color: #0ff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.25) inset;
  transition: 0.3s ease-in-out;
}

input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 15px #0ff;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.preview img {
  width: 100px;
  margin-top: 10px;
  border: 2px solid #0ff;
  border-radius: 8px;
  box-shadow: 0 0 10px #0ff;
}

.glow-button {
  width: 100%;
  padding: 12px;
  background-color: #0ff;
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 15px #0ff, 0 0 3px #0ff;
  transition: 0.3s;
}

.glow-button:hover {
  background-color: #00ffff;
  box-shadow: 0 0 25px #0ff, 0 0 25px #0ff;
}


.button {
  background-color: #111; /* dark background */
  border-radius: 12px;
  padding: 12px;
  transition: box-shadow 0.4s ease;
  cursor: pointer;
   width: 100%;
  padding: 12px;
    color: #00ffff;

}

.button:hover {
  box-shadow: 0 0 20px rgba(0, 251, 255, 0.3); /* subtle glow */
}

</style>
