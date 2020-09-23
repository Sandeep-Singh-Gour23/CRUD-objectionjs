const express = require("express");
const bodyParser  = require("body-parser");
//const morgan = require("morgan");
//const cors = require("cors");
const path = require("path");

// Express Router Initialize
const router = express.Router();

// Knex and Objection dependencies.
const knexConfig = require("./knexfile");           
const Knex = require("knex");
const { Model } = require("objection");

// Initialize knex.
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
Model.knex(knex);


const app = express()
  .use(bodyParser.json())
  .use(router)
app.use(express.static(path.join(__dirname, 'public')))

// Import API Routes.
const userRoutes = require("./src/routes/index");

// Add routes as middleware.
app.use("/api",userRoutes);



// Port for Server
const port =3000;

// Express Server 
app.listen(port, () => {
    console.log('Server listening at port %s', port);
  });