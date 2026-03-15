# ZenSpend — Cloud Expense Tracker

ZenSpend is a modern SaaS-style web application designed to help users track personal expenses with elegance and calm. Inspired by minimalist Japanese aesthetics and modern fintech dashboards, it offers a seamless experience backed by Azure Cloud architecture.

## 🚀 Features

*   **Aesthetic Marketing Landing Page**: Smooth anchor-scrolls, animations (Framer Motion), and responsive breakpoints.
*   **Dynamic Dashboard Workspace**:
    *   Sub-navigation routing (Expenses, Analytics, Settings tabs).
    *   Dynamic sizing layout cards supporting context caching.
    *   Clean currency formatting dropdown state values (`$`, `₹`, `€`, `£`).
*   **Authentication Mockups**:
    *   Stand-alone `/login` and `/register` views with synchronized dynamic greet nodes.
*   **Responsive Charts**: Beautiful Area-chart Trend nodes and Catagory Pie visualizations (Recharts).

---

## 🛠 Tech Stack

### **Frontend**
*   **Core**: React 18+ (Vite)
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Charts**: Recharts
*   **Icons**: Lucide React

### **Backend**
*   **Core**: Spring Boot 3.x REST API
*   **Database**: H2 (In-Memory layout setup)

---

## 💻 Local Setup Instructions

### **1. Run Backend**
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Start the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
   *The backend runs at `http://localhost:8080/api`*

### **2. Run Frontend**
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *The app runs at `http://localhost:5173/`*

---

## ☁ Azure Deployment Ready
Pre-configured for Azure deployments including **Azure SQL Database** and **Azure Blob Storage** placeholders for complete mockups.
