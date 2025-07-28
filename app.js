const ENV = process.env.NODE_ENV || "production";
require("dotenv").config({
  path: `.env.${ENV}`,
});

// Core Modules
const path = require("path");
const fs = require("fs");

// External Modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongodb_session = require("connect-mongodb-session");
const multer = require("multer");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

// Local Modules
const { hostRouter } = require("./routers/hostRouter");
const { authRouter } = require("./routers/authRouter");
const storeRouter = require("./routers/storeRouter");
const rootDir = require("./util/path-util");
const errorController = require("./controllers/errorController");

const MongoDbStore = mongodb_session(session);
const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@fezal30.ku4txsy.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority&appName=Fezal30`;
const sessionStore = new MongoDbStore({
  uri: MONGO_DB_URL,
  collection: "sessions",
});

// ✅ Ensure uploads directory exists
const uploadsPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath);
}

// ✅ Multer config (safe filename)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const safeFilename = Date.now() + "-" + file.originalname;
    cb(null, safeFilename);
  },
});

const fileFilter = (req, file, cb) => {
  const isValidFile = ["image/png", "image/jpeg", "image/jpg"].includes(
    file.mimetype
  );
  cb(null, isValidFile);
};

const app = express();

// ✅ Set EJS view engine
app.set("view engine", "ejs");
app.set("views", "views");

// ✅ Static folder
app.use(express.static(path.join(rootDir, "public")));
app.use("/uploads", express.static(path.join(rootDir, "uploads")));

// ✅ Body Parser
app.use(express.urlencoded({ extended: true }));

// ✅ Multer Middleware
app.use(multer({ storage, fileFilter }).single("photo"));

// ✅ Session config
app.use(
  session({
    secret: "MERN LIVE BATCH",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);

// ✅ Routes
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
});
app.use("/host", hostRouter);
app.use(authRouter);

// ✅ 404 Error Controller
app.use(errorController.get404);

// ✅ Start Server
const PORT = process.env.PORT || 3000;
mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});
