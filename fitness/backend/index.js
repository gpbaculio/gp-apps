require("@dotenvx/dotenvx").config();
const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./schema");
const mongoose = require("mongoose");

// MongoDB Connection

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bxu5m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Express App
const app = express();

// Use graphql-http to handle requests at /graphql
app.use(
  "/graphql",
  createHandler({
    schema,
    graphiql: true, // Enable GraphiQL tool
  })
);

// Start Server
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000/graphql");
});
