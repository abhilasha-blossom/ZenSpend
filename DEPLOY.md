# 🚀 Deploying ZenSpend

To get your application live in the cloud, you can deploy the **Frontend** and **Backend** separately into free tiers (like Vercel and Render) or use **Microsoft Azure** as defined in your original tech stack node outline.

---

## 🟢 Option 1: Fast & Free (Highly Recommended)

### **1. Frontend (Vercel)**
The fastest way to deploy a React SPA is **Vercel**. It is free & sets up in 1 click.
1. Create a free account at [Vercel.com](https://vercel.com/).
2. Click **"Add New" ➔ "Project"**.
3. Import your `ZenSpend` GitHub repository layout repository.
4. Set the **Root Directory** to `frontend`.
5. Click **Deploy**. Your site will be live at a custom `<name>.vercel.app` domain.

### **2. Backend (Render.com)**
To host the Spring Boot API securely:
1. Create an account at [Render.com](https://render.com/).
2. Create a **"Web Service"**.
3. Connect your GitHub Repo.
4. Set **Build Command**: `./mvnw clean package -DskipTests` (inside `backend` dir)
5. Set **Start Command**: `java -jar target/*.jar`
6. Set Environment Variables for your Azure SQL or local configuration.

---

## 🔵 Option 2: Enterprise Azure Setup

To deploy to Azure App Service as requested initially, you can use **GitHub Actions** workflows for automated CI/CD builds on Push triggers.

### **1. Setup Azure Resources**
You will need:
- **Azure App Service** (Linux / Node node) for the Frontend.
- **Azure App Service** (Linux / Java version) for the Backend.
- **Azure SQL Database** for persistent storage.

### **2. Wired GitHub Secrets**
In your GitHub Repository, navigate to **Settings ➔ Secrets and variables ➔ Actions** and append:
- `AZURE_FRONTEND_PUBLISH_PROFILE`: [Your Frontend Publish Profile XML]
- `AZURE_BACKEND_PUBLISH_PROFILE`: [Your Backend Publish Profile XML]

---

## 🛠 CI/CD Pipelines
We have created `.github/workflows/` files in this repository to automate Azure builds whenever you push to `main` securely!
Ensure you set up the Publish Profile secrets on GitHub to activate those triggers.
