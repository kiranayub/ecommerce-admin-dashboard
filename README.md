# ecommerce-admin-dashboard

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


---
## Documentation.md (Design Choices, Challenges, Screenshots)


#  Project Documentation – Kiran E-commerce Admin Dashboard
   https://kiranecommerceadmindashboard.netlify.app/
---

##  Overview

This admin dashboard was built with **Vue.js** for front-end interactivity and **AG Grid** for data table capability. **Node.js** was employed to mimic API interactions without actual database integration, as backend/database integration wasn't explicitly needed in the initial brief.

---

##  Design Decisions

- **Component-Based Architecture (Vue.js)**: Maintainable and reusable UI.

- **AG Grid**: Efficient and robust for handling inventory data with capabilities such as sorting, filtering, and updating stock.
- **Mock Backend with Node.js**: Direct product addition and inventory logic simulation without DB.
- **Color Indicators**: Products low in stock are marked in **red** to attract admin attention.
- **Chart Visualization**: Revenue is represented through simple and clean bar/pie charts for business understanding.
---

##  Functionality by Page

###  Add Product

- Fields:

  - Product Name, Description, Category, Price, Stock, Image Upload
- Validation applied
- On Submit:
- Add product to the list of inventory with mock functions
---

###  Inventory Manager

- Functionality:

  - Search by product name
  - Sort product by name or stock
  - Update stock values inline
  - Low stock alert with red text or border
---

### Revenue Dashboard

- Filter by Category (All, etc.)

- Filter by Time Range (Monthly)
- Shows:
  - Total Orders (e.g., 2)
- Total Revenue (e.g., $1250.00)
- Includes data visualization (charts)
---

## Challenges Faced

| Challenge | Solution |

|----------|----------|
| Backend not clearly defined | Used Node.js to simulate backend behavior with static/mock data |
| Managing tabular data | Implemented AG Grid with built-in filtering & sorting |
| Form data management | Used Vue's reactive system for form submission & validation |
| Visual indications for low stock | Utilized conditional styling within AG Grid to mark low stock rows |

---

Final Notes

- The dashboard fulfills the specified front-end requirements.

- Node.js was utilized responsibly according to available guidelines.
- The system is scalable for future backend/database integration.
