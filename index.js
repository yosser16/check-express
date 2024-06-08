const express = require ("express");
const dontenv = require ("dotenv");
const appRoutes= require ("./routes")
const path = require ("path");
const {opentime} = require ("./middelwars/opentime")
const router = require("./routes");
const app = express() 
dontenv.config() 
app.use(opentime)
app.use(appRoutes) 

app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "style.css"));
  });
  

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "pages", "404.html"));
  });


const port = process.env.PORT || 7000;
app.listen((3000, () => {console.log(`server is running on ${port}`);}))