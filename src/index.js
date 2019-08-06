const express = require("express");
const moviesRoutes = require("./routes/movies");
const categoriesRoutes = require("./routes/categories");
const movcatRoutes = require("./routes/movcat");

const app = express();
const port = 2020;

app.use(express.json());
app.use(categoriesRoutes);
app.use(movcatRoutes);
app.use(moviesRoutes);

app.listen(port, () => {
  console.log("Menjalankan API di " + port)
});


app.get('/' , (req,res) => {
  res.send('<center><h1>  Ini Home Page </h1></center>')
});