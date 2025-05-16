
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

