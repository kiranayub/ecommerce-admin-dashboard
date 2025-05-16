<!-- <template>
  <div class="revenue-dashboard">
    <h2>Revenue Analysis</h2>
    
    <div class="stats">
      <div class="card">
        <h3>Total Orders</h3>
        <p>{{ totalOrders }}</p>
      </div>
      <div class="card">
        <h3>Total Revenue</h3>
        <p>${{ totalRevenue }}</p>
      </div>
    </div>

    <div class="filters">
      <label for="category">Filter by Category:</label>
      <select v-model="selectedCategory" @change="filterData">
        <option value="">All</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <div class="charts">
      <canvas id="revenueChart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'RevenueDashboard',
  data() {
    return {
      totalOrders: 1200,
      totalRevenue: 95000,
      selectedCategory: '',
      categories: ['Electronics', 'Clothing', 'Home', 'Toys'],
      revenueData: [
        { month: 'Jan', revenue: 8000 },
        { month: 'Feb', revenue: 12000 },
        { month: 'Mar', revenue: 15000 },
        { month: 'Apr', revenue: 13000 },
        { month: 'May', revenue: 17000 },
        { month: 'Jun', revenue: 20000 },
      ],
      chartInstance: null,
    };
  },
  methods: {
    drawChart() {
      const ctx = document.getElementById('revenueChart').getContext('2d');
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }
      this.chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.revenueData.map(item => item.month),
          datasets: [{
            label: 'Revenue',
            data: this.revenueData.map(item => item.revenue),
            borderColor: '#42A5F5',
            fill: false,
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        },
      });
    },
    filterData() {
      // Dummy filter – future implementation for real data
      this.drawChart();
    },
  },
  mounted() {
    this.drawChart();
  },
};
</script>

<style scoped>
.revenue-dashboard {
  padding: 20px;
}
.stats {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.card {
  background: #f0f4f8;
  padding: 15px;
  border-radius: 10px;
  flex: 1;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}
.filters {
  margin-bottom: 20px;
}
</style> -->


<!-- 
<template>
  <div>
    <h2>Revenue Dashboard</h2>

    <div>
      <label>Filter by Category:</label>
      <select v-model="selectedCategory">
        <option value="">All</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <div class="summary">
      <p>Total Orders: {{ filteredProducts.length }}</p>
      <p>Total Revenue: ${{ totalRevenue }}</p>
    </div>

    <canvas id="revenueChart" height="100"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      selectedCategory: '',
      chart: null
    };
  },
  computed: {
    products() {
      return JSON.parse(localStorage.getItem('products')) || [];
    },
    filteredProducts() {
      if (!this.selectedCategory) return this.products;
      return this.products.filter(p => p.category === this.selectedCategory);
    },
    totalRevenue() {
      return this.filteredProducts.reduce((sum, p) => sum + p.price * p.stock, 0);
    },
    categories() {
      const cats = this.products.map(p => p.category);
      return [...new Set(cats)];
    }
  },
  methods: {
    drawChart() {
      if (this.chart) this.chart.destroy();

      const data = this.filteredProducts.map(p => p.name);
      const revenue = this.filteredProducts.map(p => p.price * p.stock);

      const ctx = document.getElementById('revenueChart');

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data,
          datasets: [
            {
              label: 'Revenue',
              data: revenue,
              backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }
          ]
        },
        options: {
          responsive: true
        }
      });
    }
  },
  watch: {
    selectedCategory() {
      this.drawChart();
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>

<style scoped>
.summary {
  margin: 20px 0;
}
</style> -->



<!-- <template>
  <div>
    <h2>📊 Revenue Dashboard</h2>

    <label>Filter by Category:</label>
    <select v-model="selectedCategory" @change="filterData">
      <option value="">All</option>
      <option v-for="cat in categories" :key="cat">{{ cat }}</option>
    </select>
    <p><strong>Total Orders:</strong> {{ filteredProducts.length }}</p>
    <p><strong>Total Revenue:</strong> ${{ totalRevenue.toFixed(2) }}</p>

       <canvas id="revenueChart"></canvas>
  </div>
</template> -->

<!-- <script>
import Chart from 'chart.js/auto';

export default {
  name: 'RevenueDashboard',
  data() {
    return {
      allProducts: [],          // original products
      filteredProducts: [],     // filtered for category
      selectedCategory: '',
      chart: null,
    };
  },

  
  computed: {
    totalRevenue() {
      return this.filteredProducts.reduce(
        (sum, product) => sum + product.price * product.stock,
        0
      );
    },
    categories() {
      const cats = this.allProducts.map((p) => p.category);
      return [...new Set(cats)];
    },
  },
  methods: {
    filterData() {
      if (this.selectedCategory) {
        this.filteredProducts = this.allProducts.filter(
          (p) => p.category === this.selectedCategory
        );
      } else {
        this.filteredProducts = [...this.allProducts];
      }
      this.updateChart();
    },
    updateChart() {
      const labels = this.filteredProducts.map((p) => p.name);
      const data = this.filteredProducts.map((p) => p.price * p.stock);

      if (this.chart) {
        this.chart.destroy();
      }

      const ctx = document.getElementById('revenueChart');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Revenue ($)',
              data,
              backgroundColor: '#42b983',
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
  mounted() {
    const stored = localStorage.getItem('products');
    this.allProducts = stored ? JSON.parse(stored) : [];
    this.filteredProducts = [...this.allProducts];
    this.updateChart();
  },

  
};
</script> -->
<!-- 
<style scoped>
select {
  margin: 10px 0;
  padding: 5px;
}
</style> -->




<!-- <template>
  <div>
    <h2>📊 Revenue Dashboard</h2>
    <label>Filter by Category:</label>
    <select v-model="selectedCategory" @change="filterData">
      <option value="">All</option>
      <option v-for="cat in categories" :key="cat">{{ cat }}</option>
    </select>
    <p><strong>Total Orders:</strong> {{ filteredProducts.length }}</p>
    <p><strong>Total Revenue:</strong> ${{ totalRevenue.toFixed(2) }}</p>
    <canvas id="revenueChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'RevenueDashboard',
  data() {
    return {
      allProducts: [],
      filteredProducts: [],
      selectedCategory: '',
      chart: null,
    };
  },
  computed: {
    totalRevenue() {
      return this.filteredProducts.reduce(
        (sum, product) => sum + product.price * product.stock,
        0
      );
    },
    categories() {
      const cats = this.allProducts.map((p) => p.category);
      return [...new Set(cats)];
    },
  },
  methods: {
    filterData() {
      this.filteredProducts = this.selectedCategory
        ? this.allProducts.filter(p => p.category === this.selectedCategory)
        : [...this.allProducts];
      this.updateChart();
    },
    updateChart() {
      const labels = this.filteredProducts.map(p => p.name);
      const data = this.filteredProducts.map(p => p.price * p.stock);
      if (this.chart) this.chart.destroy();
      const ctx = document.getElementById('revenueChart');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{ label: 'Revenue ($)', data, backgroundColor: '#42b983' }]
        },
        options: {
          responsive: true,
          scales: { y: { beginAtZero: true } }
        }
      });
    }
  },
  mounted() {
    const stored = localStorage.getItem('products');
    this.allProducts = stored ? JSON.parse(stored) : [];
    this.filteredProducts = [...this.allProducts];
    this.updateChart();
  }
};
</script>

<style scoped>
select {
  margin: 10px 0;
  padding: 5px;
}
</style> -->

<!-- 
<template>
  <div>
    <h2>📊 Revenue Dashboard</h2> -->

    <!-- Filters -->
    <!-- <label>Filter by Category:</label>
    <select v-model="selectedCategory" @change="filterData">
      <option value="">All</option>
      <option v-for="cat in categories" :key="cat">{{ cat }}</option>
    </select>

    <label>Filter by Time Range:</label>
    <select v-model="timeRange" @change="filterData">
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
      <option value="annually">Annually</option>
    </select> -->

    <!-- Totals -->
    <!-- <p><strong>Total Orders:</strong> {{ filteredProducts.length }}</p>
    <p><strong>Total Revenue:</strong> ${{ totalRevenue.toFixed(2) }}</p> -->

    <!-- Chart -->
    <!-- <canvas id="revenueTrendChart"></canvas>
  </div>
</template> -->

<!-- <script>
import Chart from 'chart.js/auto';
import { inventory } from '@/assets/inventoryData.js';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear); // needed for .week()

export default {
  name: 'RevenueDashboard',
  data() {
    return {
      allProducts: [],
      filteredProducts: [],
      selectedCategory: '',
      timeRange: 'monthly',
      chart: null
    };
  },
  computed: {
    totalRevenue() {
      return this.filteredProducts.reduce(
        (sum, product) => sum + product.price * product.stock,
        0
      );
    },
    categories() {
      return [...new Set(this.allProducts.map(p => p.category))];
    }
  },
  methods: {
    filterData() {
    //   const now = dayjs();

      // Category filter
      const categoryFiltered = this.selectedCategory
        ? this.allProducts.filter(p => p.category === this.selectedCategory)
        : [...this.allProducts];

      // Group data
      const grouped = {};
      categoryFiltered.forEach(product => {
        const date = dayjs(product.addedAt || product.createdAt || new Date());

        let key = '';
        if (this.timeRange === 'daily') {
          key = date.format('YYYY-MM-DD');
        } else if (this.timeRange === 'weekly') {
          key = `${date.year()}-W${date.week()}`;
        } else if (this.timeRange === 'monthly') {
          key = date.format('YYYY-MM');
        } else if (this.timeRange === 'annually') {
          key = date.format('YYYY');
        }

        if (!grouped[key]) grouped[key] = 0;
        grouped[key] += product.price * product.stock;
      });

      // Keep the original list for total counts
      this.filteredProducts = categoryFiltered;

      // Chart it
      this.renderChart(grouped);
    },
    renderChart(dataMap) {
      const labels = Object.keys(dataMap).sort();
      const data = labels.map(label => dataMap[label]);

      if (this.chart) this.chart.destroy();

      const ctx = document.getElementById('revenueTrendChart');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Revenue Over Time ($)',
            data,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'blue',
            fill: true,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: true
            }
          }
        }
      });
    }
  },
  mounted() {
    this.allProducts = inventory;
    this.filterData();
  }
};
</script> -->

<!-- <style scoped>
select {
  margin: 10px 10px 10px 0;
  padding: 5px;
}
</style> -->




<!-- 

<template>
  <div class="p-6 space-y-6">
    <h2 class="text-2xl font-bold text-gray-800" data-aos="fade-down">📊 Revenue Dashboard</h2>

    <div class="flex flex-wrap gap-4 items-center" data-aos="fade-right">
      <div>
        <label class="text-gray-600 font-semibold block">Filter by Category:</label>
        <select
          v-model="selectedCategory"
          @change="filterData"
          class="border border-gray-300 rounded px-4 py-2 focus:ring focus:outline-none"
        >
          <option value="">All</option>
          <option v-for="cat in categories" :key="cat">{{ cat }}</option>
        </select>
      </div>

      <div>
        <label class="text-gray-600 font-semibold block">Filter by Time Range:</label>
        <select
          v-model="timeRange"
          @change="filterData"
          class="border border-gray-300 rounded px-4 py-2 focus:ring focus:outline-none"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="annually">Annually</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4" data-aos="fade-up">
      <div class="bg-white shadow-lg rounded-xl p-6 text-center">
        <p class="text-gray-500">Total Orders</p>
        <p class="text-2xl font-semibold text-blue-600">{{ filteredProducts.length }}</p>
      </div>
      <div class="bg-white shadow-lg rounded-xl p-6 text-center">
        <p class="text-gray-500">Total Revenue</p>
        <p class="text-2xl font-semibold text-green-600">${{ totalRevenue.toFixed(2) }}</p>
      </div>
    </div>

    <div class="bg-white p-4 rounded-xl shadow-md" data-aos="zoom-in">
      <canvas id="revenueTrendChart" class="w-full h-64"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { inventory } from '@/assets/inventoryData.js';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import AOS from 'aos';
import 'aos/dist/aos.css';

dayjs.extend(weekOfYear);

export default {
  name: 'RevenueDashboard',
  data() {
    return {
      allProducts: [],
      filteredProducts: [],
      selectedCategory: '',
      timeRange: 'monthly',
      chart: null
    };
  },
  computed: {
    totalRevenue() {
      return this.filteredProducts.reduce(
        (sum, product) => sum + product.price * product.stock,
        0
      );
    },
    categories() {
      return [...new Set(this.allProducts.map(p => p.category))];
    }
  },
  methods: {
    filterData() {
      const categoryFiltered = this.selectedCategory
        ? this.allProducts.filter(p => p.category === this.selectedCategory)
        : [...this.allProducts];

      const grouped = {};
      categoryFiltered.forEach(product => {
        const date = dayjs(product.addedAt || product.createdAt || new Date());

        let key = '';
        if (this.timeRange === 'daily') {
          key = date.format('YYYY-MM-DD');
        } else if (this.timeRange === 'weekly') {
          key = `${date.year()}-W${date.week()}`;
        } else if (this.timeRange === 'monthly') {
          key = date.format('YYYY-MM');
        } else if (this.timeRange === 'annually') {
          key = date.format('YYYY');
        }

        if (!grouped[key]) grouped[key] = 0;
        grouped[key] += product.price * product.stock;
      });

      this.filteredProducts = categoryFiltered;
      this.renderChart(grouped);
    },
    renderChart(dataMap) {
      const labels = Object.keys(dataMap).sort();
      const data = labels.map(label => dataMap[label]);

      if (this.chart) this.chart.destroy();

      const ctx = document.getElementById('revenueTrendChart');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Revenue Over Time ($)',
            data,
            backgroundColor: 'rgba(54, 162, 235, 0.3)',
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: true,
              labels: {
                color: '#444',
                font: {
                  size: 14,
                  weight: 'bold'
                }
              }
            }
          }
        }
      });
    }
  },
  mounted() {
    AOS.init();
    this.allProducts = inventory;
    this.filterData();
  }
};
</script>

<style scoped>
/* Optional: smooth background if using dark/light theme */
body {
  background-color: #f9fafb;
}
</style> -->



<template>
  <div class="dashboard-container">
    <h2 class="dashboard-title">Revenue Dashboard</h2>

    <!-- Filters -->
    <div class="filters">
      <div class="filter-group">
        <label>Filter by Category:</label>
        <select v-model="selectedCategory" @change="filterData">
          <option value="">All</option>
          <option v-for="cat in categories" :key="cat">{{ cat }}</option>
        </select>
      </div>

      <div class="filter-group">
        <label>Filter by Time Range:</label>
        <select v-model="timeRange" @change="filterData">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="annually">Annually</option>
        </select>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="summary-cards">
      <div class="card">
        <p>Total Orders</p>
        <p class="value">{{ filteredProducts.length }}</p>
      </div>
      <div class="card">
        <p>Total Revenue</p>
        <p class="value">${{ totalRevenue.toFixed(2) }}</p>
      </div>
    </div>

    <!-- Chart -->
    <div class="chart-container">
      <canvas id="revenueTrendChart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { inventory } from '@/assets/inventoryData.js';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);

export default {
  name: 'RevenueDashboard',
  data() {
    return {
      allProducts: [],
      filteredProducts: [],
      selectedCategory: '',
      timeRange: 'monthly',
      chart: null
    };
  },
  computed: {
    totalRevenue() {
      return this.filteredProducts.reduce(
        (sum, product) => sum + product.price * product.stock,
        0
      );
    },
    categories() {
      return [...new Set(this.allProducts.map(p => p.category))];
    }
  },
  methods: {
    filterData() {
      const categoryFiltered = this.selectedCategory
        ? this.allProducts.filter(p => p.category === this.selectedCategory)
        : [...this.allProducts];

      const grouped = {};
      categoryFiltered.forEach(product => {
        const date = dayjs(product.addedAt || product.createdAt || new Date());

        let key = '';
        if (this.timeRange === 'daily') {
          key = date.format('YYYY-MM-DD');
        } else if (this.timeRange === 'weekly') {
          key = `${date.year()}-W${date.week()}`;
        } else if (this.timeRange === 'monthly') {
          key = date.format('YYYY-MM');
        } else if (this.timeRange === 'annually') {
          key = date.format('YYYY');
        }

        if (!grouped[key]) grouped[key] = 0;
        grouped[key] += product.price * product.stock;
      });

      this.filteredProducts = categoryFiltered;
      this.renderChart(grouped);
    },
    renderChart(dataMap) {
      const labels = Object.keys(dataMap).sort();
      const data = labels.map(label => dataMap[label]);

      if (this.chart) this.chart.destroy();

      const ctx = document.getElementById('revenueTrendChart');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Revenue Over Time ($)',
            data,
            backgroundColor: 'rgba(0, 255, 255, 0.2)',
            borderColor: '#0ff',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: '#0ff'
              }
            },
            x: {
              ticks: {
                color: '#0ff'
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: '#0ff',
                font: {
                  weight: 'bold'
                }
              }
            }
          }
        }
      });
    }
  },
  mounted() {
    this.allProducts = inventory;
    this.filterData();
  }
};
</script>

<style scoped>
.dashboard-container {
  max-width: 900px;
  max-height: 900px;
  margin: 40px auto;
  padding: 30px;
  background-color: #111;
  border-radius: 20px;
  box-shadow: 0 0 9px rgb(159, 247, 247);
  color: #fff;
}

.dashboard-title {
  text-align: center;
  /* color: #0ff; */
  text-shadow: 0 0 3px #0ff;
  margin-bottom: 30px;
  color: rgb(215, 242, 136);
  font-size: 28px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  justify-content: space-between;
}

.filter-group {
  flex: 1;
  min-width: 200px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #0ff;
  font-weight: bold;
}

select {
  width: 100%;
  padding: 10px;
  background: #222;
  border: 1px solid #0ff;
  border-radius: 8px;
  color: #0ff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3) inset;
  transition: 0.3s ease-in-out;
}

select:focus {
  outline: none;
  box-shadow: 0 0 15px #0ff;
}

.summary-cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  justify-content: space-between;
}

.card {
  background: #222;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 3px #0ff;
  flex: 1;
  min-width: 200px;
  text-align: center;
  transition: box-shadow 0.4s ease;
}

.card:hover {
  box-shadow: 0 0 20px rgba(151, 200, 249, 0.612); /* subtle glow */}
.card p {
  margin: 0;
  color: #aaa;
}

.card .value {
  margin-top: 10px;
  font-size: 24px;
  color: #0ff;
  font-weight: bold;
}

.chart-container {
  background: #222;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 3px #0ff;


   
  transition: box-shadow 0.4s ease;
}

.chart-container:hover {
  box-shadow: 0 0 20px rgba(151, 200, 249, 0.612); /* subtle glow */}
</style>

