const mongoose = require("mongoose");
require("dotenv").config();
const mongo_url = process.env.mongoUrl;

// Connect to MongoDB
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Export the Mongoose instance for use in other modules
module.exports = mongoose;
