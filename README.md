# 🏠 Airbnb Clone

A full-stack Airbnb-like web application built using **Node.js**, **Express**, **MongoDB**, **EJS**, and **Tailwind CSS**.

---

### 🌐 Live Demo

🔗 [Click here to view the live site](https://fezal30-airbnb.azurewebsites.net/)

---

### 🚀 Features

- 🔐 User Authentication (Signup/Login)
- 🏠 Host your property
- 📅 Book available properties
- 🔑 Forgot/reset password system
- ❤️ Add homes to favorites
- 📸 Image upload for homes
- 🧼 Clean and mobile-friendly UI (Tailwind CSS)

---

### 📸 Screenshots

> _(Add screenshots of homepage, login, and property detail pages here later by dragging images or using markdown image links)_

---

### 🧩 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Templating Engine**: EJS
- **Styling**: Tailwind CSS
- **Authentication**: JWT, bcrypt, express-session
- **File Upload**: multer
- **Hosting**: Azure App Service

---

### 📁 Folder Structure


root/
├── app.js 🚀 Main server setup
├── package.json 📦 NPM dependencies
├── tailwind.config.js 🎨 Tailwind config
│
├── 📁 controllers 💡 Route logic
│ ├── authController.js
│ ├── errorController.js
│ ├── hostController.js
│ ├── storeController.js
│ └── validations.js
│
├── 📁 models 🧠 Mongoose Schemas
│ ├── home.js
│ └── user.js
│
├── 📁 routers 🔁 Express routes
│ ├── authRouter.js
│ ├── hostRouter.js
│ └── storeRouter.js
│
├── 📁 views 🌐 EJS templates
│ ├── 📁 auth
│ ├── 📁 host
│ ├── 📁 store
│ ├── 📁 partials
│ └── 404.ejs
│
├── 📁 public 🖼️ Static assets
│ ├── 📁 styles
│ └── 📁 images
│
├── 📁 uploads 📤 User-uploaded images
├── 📁 util ⚙️ Helper functions
└── .env 🔐 Environment variables

yaml
Copy
Edit


---

### 🛠️ Getting Started

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/airbnb-clone.git
cd airbnb-clone

npm install

MONGO_DB_USERNAME=yourMongoUser
MONGO_DB_PASSWORD=yourMongoPass
MONGO_DB_DATABASE=airbnb
MONGO_DB_CLUSTER=yourCluster.mongodb.net

npm run dev

### 🙋‍♂️ Author

- **Fezal Khan**
- 🔗 [LinkedIn](https://www.linkedin.com/in/fezal-khan-592966243/)
- 💻 [GitHub](https://github.com/Fezal30)

📄 License
This project is licensed under the MIT License.


---

### 🧠 Next Steps

- Add screenshots by uploading them to GitHub or using Markdown like:
  ```md
  ![Homepage](./public/images/homepage.png)


