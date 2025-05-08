# 🛍️ Product Management System with Search Functionality

A full-stack web application that allows users to view, search, and manage products. This project demonstrates seamless integration between a ReactJS frontend and a Spring Boot backend with dynamic search capabilities.

## 🚀 Tech Stack

### Frontend:
- ReactJS
- Bootstrap 5
- Axios
- React Hook Form

### Backend:
- Spring Boot
- Spring Data JPA (Hibernate)
- RESTful API
- Java 17+

### Database:
- H2 (In-memory, default) or switchable to PostgreSQL/MySQL

---

## ✨ Features

- ✅ View all products in a clean, responsive card layout
- 🔍 Live search functionality (by product title)
- 📦 Product details include:
  - Title
  - Description
  - Ratings (static icons)
  - Highlights (e.g. 100% cotton, unisex)
  - Price with strike-through original price
  - Free shipping badge
- 🛒 Buttons for:
  - Product Details
  - Add to Wishlist
- 📡 RESTful backend integration via Axios
- 💡 Smart backend search using `findByNameContainingIgnoreCase(...)`

---

## 📂 Project Structure

### 🖥️ Frontend (React)
src/
├── components/

│ └── Alldata.js // Main product listing & search logic

├── App.js

└── index.js

### ⚙️ Backend (Spring Boot)
src/
├── controller/

│ └── ProductController.java

├── service/

│ └── ProductService.java

├── repository/

│ └── ProductRepository.java

├── model/

│ └── Product.java


---

## 🔧 Setup Instructions

### ✅ Prerequisites
- Node.js & npm
- Java 17+ (JDK)
- Maven

---

### 🖥️ Frontend Setup

```bash
cd frontend
npm install
npm start

App runs on: http://localhost:5173

### 🔙 Backend Setup
cd backend
mvn spring-boot:run
Backend runs on: http://localhost:8080



API Endpoints
| Method | Endpoint                     | Description              |
| ------ | ---------------------------- | ------------------------ |
| GET    | `/products`                  | Fetch all products       |
| GET    | `/products/searchs?name=abc` | Search products by title |
| GET    | `/products/{id}`             | Get product by ID        |
| POST   | `/products/data`             | Add new product          |

 Demo Screenshots

📈 Future Enhancements
Product filtering by category or price

Admin dashboard for adding/editing products

Pagination / infinite scroll

Authentication (JWT / OAuth2)

Cart & checkout integration

👨‍💻 Developed By
Pratik Jatale
B.Tech in Computer Science
🌐 Portfolio | 🐦 Twitter | 💼 LinkedIn

📝 License
This project is licensed under the MIT License.

